const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 E-Commerce. Todos os direitos reservados.</p>
        
        <div className="mt-4">
          <a href="/privacy" className="hover:text-yellow-300">Política de Privacidade</a>
          <span className="mx-2">|</span>
          <a href="/terms" className="hover:text-yellow-300">Termos de Serviço</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
