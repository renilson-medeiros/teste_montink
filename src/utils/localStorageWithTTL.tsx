export function setWithTTL(key: string, value: any, ttl: number = 900000): void {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getWithTTL<T>(key: string): T | null {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  try {
    const item = JSON.parse(itemStr);
    if (!item || typeof item !== "object" || !("value" in item) || !("expiry" in item)) {
      localStorage.removeItem(key);
      return null;
    }

    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value as T;
  } catch (err) {
    
    localStorage.removeItem(key);
    return null;
  }
}
