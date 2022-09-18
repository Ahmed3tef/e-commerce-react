import { Banner, Footer, Header, SectionProducts } from '../components';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      exit={{ opacity: 0 }}>
      <Header />
      <main>
        <SectionProducts />
        <Banner />
        <SectionProducts last />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;
