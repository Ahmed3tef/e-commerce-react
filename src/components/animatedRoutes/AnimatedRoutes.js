import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Categories, Food, Home, NotFound, Supermarket } from '../../pages';
import { sidebarData } from '../../utils/cosnts';
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='categories' element={<Categories />}>
          <Route index element={<Supermarket />} />
          {sidebarData.map(el => (
            <Route path={el.path} element={el.element} key={el.title}></Route>
          ))}
        </Route>

        <Route path='food' element={<Food />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
