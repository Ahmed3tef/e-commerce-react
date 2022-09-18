import React from 'react';
// import { subCategories } from '../../utils/cosnts';
import { SubCategory } from '../index';
import { motion } from 'framer-motion';
const CategoriesMain = () => {
  return (
    <main>
      <motion.div
        className='container-fluid'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.003 }}
        exit={{ opacity: 0 }}>
        <SubCategory />
        <SubCategory />
        <SubCategory />
      </motion.div>
    </main>
  );
};

export default CategoriesMain;
