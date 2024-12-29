import React from "react";
import { Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B0F16] text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contatos</h3>
            <div className="space-y-2 text-gray-300">
              <p>E-mail: contato@alexandrecalmon.com</p>
              <p>WhatsApp: (11) 98130-0027</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-start md:justify-end items-center gap-6">
            <a
              href="https://www.linkedin.com/in/alexandrecalmon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#DAA520] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/alexandrecalmon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#DAA520] transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@alexandrevcalmon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#DAA520] transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2024 – Calmon Consultoria, Palestras e Treinamentos – CNPJ:
            47.350.455/0001-09 - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
