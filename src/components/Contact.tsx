import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // В реальном приложении здесь будет логика отправки формы
    console.log("Form submitted:", formData);
    // Очистка формы после отправки
    setFormData({ name: "", phone: "", email: "", message: "" });
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <section className="py-20 bg-white dark:bg-revive-dark">
      <div className="container-revive">
        <div className="text-center mb-16">
          <div className="fade-in-animation">
            <span className="text-revive-primary uppercase tracking-wider text-sm mb-4 inline-block">
              Наши контакты
            </span>
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2 dark:text-white">
              Свяжитесь с нами
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-revive-sand/80">
              Запишитесь на процедуру или задайте интересующий вас вопрос. Мы
              всегда рады помочь вам.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div className="fade-in-animation">
            <div className="bg-revive-light dark:bg-revive-dark/30 p-8 rounded-lg border border-revive-sand/20">
              <h3 className="font-playfair text-2xl mb-6 dark:text-white">
                Контактная информация
              </h3>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-revive-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-revive-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 dark:text-white">Адрес</h4>
                    <p className="text-gray-600 dark:text-revive-sand/80">
                      г. Саратов, ул. Примерная, д. 123
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-revive-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-revive-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 dark:text-white">
                      Телефон
                    </h4>
                    <p className="text-gray-600 dark:text-revive-sand/80">
                      <a
                        href="tel:+71234567890"
                        className="hover:text-revive-primary transition-colors"
                      >
                        +7 (123) 456-78-90
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-revive-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-revive-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-revive-sand/80">
                      <a
                        href="mailto:info@revive-studio.ru"
                        className="hover:text-revive-primary transition-colors"
                      >
                        info@revive-studio.ru
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-revive-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="text-revive-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 dark:text-white">
                      Часы работы
                    </h4>
                    <p className="text-gray-600 dark:text-revive-sand/80">
                      Пн-Пт: 9:00 - 20:00
                    </p>
                    <p className="text-gray-600 dark:text-revive-sand/80">
                      Сб-Вс: 10:00 - 18:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="fade-in-animation">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-revive-dark/30 p-8 rounded-lg border border-revive-sand/20"
            >
              <h3 className="font-playfair text-2xl mb-6 dark:text-white">
                Обратная связь
              </h3>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-gray-700 dark:text-revive-sand/90"
                  >
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-revive-sand/30 rounded-md focus:border-revive-primary focus:ring-1 focus:ring-revive-primary dark:bg-revive-dark/70 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-gray-700 dark:text-revive-sand/90"
                  >
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-revive-sand/30 rounded-md focus:border-revive-primary focus:ring-1 focus:ring-revive-primary dark:bg-revive-dark/70 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-gray-700 dark:text-revive-sand/90"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-revive-sand/30 rounded-md focus:border-revive-primary focus:ring-1 focus:ring-revive-primary dark:bg-revive-dark/70 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-gray-700 dark:text-revive-sand/90"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-revive-sand/30 rounded-md focus:border-revive-primary focus:ring-1 focus:ring-revive-primary dark:bg-revive-dark/70 dark:text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-revive-primary hover:bg-revive-secondary text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Отправить сообщение
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
