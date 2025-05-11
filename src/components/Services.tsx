import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    id: 1,
    title: "Релаксирующий массаж",
    description:
      "Снимает напряжение, помогает расслабиться и восстановиться после стрессовых ситуаций.",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2940&auto=format&fit=crop",
    price: "от 2500 ₽",
    duration: "60 минут",
  },
  {
    id: 2,
    title: "Лечебный массаж",
    description:
      "Восстановительные процедуры для устранения боли и улучшения подвижности.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2940&auto=format&fit=crop",
    price: "от 3000 ₽",
    duration: "45 минут",
  },
  {
    id: 3,
    title: "Антицеллюлитный массаж",
    description:
      "Эффективная методика борьбы с целлюлитом и моделирования контуров тела.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2940&auto=format&fit=crop",
    price: "от 2800 ₽",
    duration: "50 минут",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white dark:bg-revive-dark">
      <div className="container-revive">
        <div className="text-center mb-16">
          <div className="fade-in-animation">
            <span className="text-revive-primary uppercase tracking-wider text-sm mb-4 inline-block">
              Наши услуги
            </span>
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2 dark:text-white">
              Профессиональный уход за телом
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-revive-sand/80">
              Мы создаем индивидуальные программы для восстановления и релакса,
              используя только сертифицированные средства и авторские методики.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="fade-in-animation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="overflow-hidden border-revive-sand/20 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-playfair text-xl">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-center gap-3 text-revive-primary text-sm">
                    <span>{service.price}</span>
                    <span className="w-1 h-1 rounded-full bg-revive-primary"></span>
                    <span>{service.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 dark:text-revive-sand/80">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-revive-primary hover:text-revive-secondary hover:bg-transparent p-0 font-medium"
                  >
                    Подробнее
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="btn-primary">Смотреть все услуги</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
