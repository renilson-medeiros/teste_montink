export interface Product {
  title: string;
  price: number;
  images: string[];
  variants: {
    size: string[];
    color: string[];
  };
}

export const product: Product = {
  title: "Camiseta Boxy de Algodão",
  price: 99.90,
  images: [
    "/camisa_basica_1.png",
    "/camisa_basica_2.png",
    "/camisa_basica_3.png",
    "/camisa_basica_4.png"
  ],
  variants: {
    size: ["P", "M", "G", "2G", "3G"],
    color: ["Preto", "Branco", "Azul"]
  }
};

export const recommended = [
  {
    id: 1,
    title: "Tênis Esportivo",
    price: "R$ 249,90",
    image: "/tenis.png"
  },
  {
    id: 2,
    title: "Jaqueta de Couro Feminina",
    price: "R$ 319,00",
    image: "/jaqueta.png"
  },
  {
    id: 3,
    title: "Mochila Resistente Marrom",
    price: "R$ 199,99",
    image: "/mochila.png"
  }
];
