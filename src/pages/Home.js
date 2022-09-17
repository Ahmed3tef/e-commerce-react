import { Banner, Footer, Header, SectionProducts } from '../components';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SectionProducts />
        <Banner />
        <SectionProducts last />
      </main>
    </>
  );
};

export default Home;
