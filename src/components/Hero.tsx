
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение с наложением */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2748&auto=format&fit=crop")', 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-revive-dark/90 to-revive-dark/70"></div>
      </div>
      
      {/* Содержимое секции */}
      <div className="container-revive relative z-10 mt-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-revive-sand uppercase tracking-widest text-sm mb-4 inline-block">
              REVIVE Skin & Body Studio
            </span>
            
            <h1 className="text-white font-playfair font-medium text-5xl md:text-6xl leading-tight mb-6">
              Ваше тело заслуживает <span className="text-revive-primary">возрождения</span>
            </h1>
            
            <p className="text-revive-sand/90 text-lg mb-8 max-w-md">
              Профессиональный массаж и СПА-процедуры для тех, 
              кто ценит качество и индивидуальный подход.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Записаться онлайн
              </Button>
              <Button 
                variant="outline" 
                className="border-revive-sand/30 text-white hover:bg-revive-primary hover:text-white hover:border-revive-primary"
              >
                Наши услуги
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-10 h-10 border-l-2 border-b-2 border-revive-primary rotate-[-45deg]"></div>
      </div>
    </section>
  );
};

export default Hero;
