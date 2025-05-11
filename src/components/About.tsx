
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const About = () => {
  const benefits = [
    'Индивидуальный подход к каждому клиенту',
    'Сертифицированные специалисты',
    'Современное оборудование и материалы',
    'Комфортная и уютная атмосфера'
  ];

  return (
    <section className="py-20 bg-revive-light dark:bg-revive-dark/70">
      <div className="container-revive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Фото */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551861568-c6e0c0e48d27?q=80&w=2787&auto=format&fit=crop" 
                alt="Константинова Полина Ивановна" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            
            {/* Декоративный элемент */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-lg border-2 border-revive-primary z-0"></div>
            
            {/* Стаж работы */}
            <div className="absolute top-6 -left-6 bg-white dark:bg-revive-dark shadow-lg p-4 rounded-lg z-20 flex items-center">
              <div className="mr-3 text-revive-primary">
                <Award size={32} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-revive-sand/70">Опыт работы</p>
                <p className="text-2xl font-playfair font-medium">8+ лет</p>
              </div>
            </div>
          </motion.div>
          
          {/* Текст */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-revive-primary uppercase tracking-wider text-sm mb-4 inline-block">
              О студии
            </span>
            
            <h2 className="section-title dark:text-white">
              REVIVE Skin & Body Studio
            </h2>
            
            <p className="mb-6 text-gray-600 dark:text-revive-sand/80">
              REVIVE Skin & Body Studio — это пространство, где ваше тело и кожа получают 
              профессиональный уход. Основатель студии, Константинова Полина Ивановна, 
              с 2015 года создает индивидуальные программы для восстановления и релакса.
            </p>
            
            <p className="mb-8 text-gray-600 dark:text-revive-sand/80">
              Мы используем только сертифицированные средства и авторские методики, 
              разработанные на основе многолетнего опыта и постоянного совершенствования 
              профессиональных навыков.
            </p>
            
            {/* Преимущества */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={20} className="text-revive-primary mt-1 shrink-0" />
                  <span className="text-gray-700 dark:text-revive-sand/90">{benefit}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* Цитата */}
            <blockquote className="border-l-4 border-revive-primary pl-4 italic text-gray-600 dark:text-revive-sand/80">
              "Здоровье и красота — это гармония души и тела. Моя миссия — помочь вам 
              достичь этой гармонии через профессиональный уход и заботу."
              <footer className="mt-2 font-medium not-italic">
                — Константинова Полина, основатель студии
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
