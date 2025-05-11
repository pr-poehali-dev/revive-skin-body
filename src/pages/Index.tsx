
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    document.title = 'REVIVE Skin & Body Studio - Массаж и СПА в Саратове';
  }, []);

  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Contact />
    </Layout>
  );
};

export default Index;
