import { ShoppingCart, UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gray-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">E-Commerce</a>
        </div>

        {/* Barra de busca */}
        <div className="flex-1 mx-4 max-w-xs sm:max-w-md lg:max-w-lg">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full p-2 rounded-md text-black focus:outline-none"
          />
        </div>

        {/* Ícones */}
        <div className="flex items-center space-x-4">
          {/* Perfil */}
          <div className="relative">
            <a href="/profile" className="hover:text-yellow-300">
              <UserCircle className="w-6 h-6" />
            </a>
          </div>

          {/* Carrinho */}
          <div className="relative">
            <a href="/cart" className="hover:text-yellow-300">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-[-6px] right-[-10px] bg-red-600 text-white text-xs rounded-full px-1">
                3
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
