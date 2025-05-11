
import { Link } from 'react-router-dom';
import { Instagram, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-revive-dark text-white pt-16 pb-8">
      <div className="container-revive">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Колонка 1: О нас */}
          <div>
            <h3 className="font-playfair text-2xl text-revive-sand mb-4">REVIVE</h3>
            <p className="text-revive-beige/80 mb-4 text-sm">
              Пространство, где ваше тело и кожа получают профессиональный уход. 
              Основатель студии, Константинова Полина Ивановна, создает индивидуальные 
              программы для восстановления и релакса.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-revive-sand/30 flex items-center justify-center hover:bg-revive-primary hover:border-revive-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/71234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-revive-sand/30 flex items-center justify-center hover:bg-revive-primary hover:border-revive-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          
          {/* Колонка 2: Ссылки */}
          <div>
            <h4 className="uppercase text-revive-sand tracking-wider mb-4 font-medium">Навигация</h4>
            <ul className="space-y-3 text-revive-beige/80">
              <li><Link to="/" className="hover:text-revive-primary transition-colors">Главная</Link></li>
              <li><Link to="/services" className="hover:text-revive-primary transition-colors">Услуги</Link></li>
              <li><Link to="/about" className="hover:text-revive-primary transition-colors">О студии</Link></li>
              <li><Link to="/gallery" className="hover:text-revive-primary transition-colors">Галерея</Link></li>
              <li><Link to="/contacts" className="hover:text-revive-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          {/* Колонка 3: Услуги */}
          <div>
            <h4 className="uppercase text-revive-sand tracking-wider mb-4 font-medium">Услуги</h4>
            <ul className="space-y-3 text-revive-beige/80">
              <li><Link to="/services" className="hover:text-revive-primary transition-colors">Массаж лица</Link></li>
              <li><Link to="/services" className="hover:text-revive-primary transition-colors">Релаксирующий массаж</Link></li>
              <li><Link to="/services" className="hover:text-revive-primary transition-colors">Лечебный массаж</Link></li>
              <li><Link to="/services" className="hover:text-revive-primary transition-colors">Антицеллюлитный массаж</Link></li>
              <li><Link to="/services" className="hover:text-revive-primary transition-colors">СПА-процедуры</Link></li>
            </ul>
          </div>
          
          {/* Колонка 4: Контакты */}
          <div>
            <h4 className="uppercase text-revive-sand tracking-wider mb-4 font-medium">Контакты</h4>
            <ul className="space-y-4 text-revive-beige/80">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-revive-primary mt-1 shrink-0" />
                <span>г. Саратов, ул. Примерная, д. 123</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-revive-primary shrink-0" />
                <a href="tel:+71234567890" className="hover:text-revive-primary transition-colors">+7 (123) 456-78-90</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-revive-primary shrink-0" />
                <a href="mailto:info@revive-studio.ru" className="hover:text-revive-primary transition-colors">info@revive-studio.ru</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Нижняя часть футера */}
        <div className="border-t border-revive-sand/10 pt-8 mt-8 text-center text-revive-beige/60 text-sm">
          <p>&copy; {currentYear} REVIVE Skin & Body Studio. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
