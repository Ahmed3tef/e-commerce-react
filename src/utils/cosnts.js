import { Supermarket } from '../pages';

export const sidebarData = [
  {
    title: 'Supermarket',
    path: 'supermarket',
    element: <Supermarket />,
    subPath: `food`,
  },
  {
    title: 'Fashion',
    path: 'fashion',
    element: <Supermarket />,
    subPath: `food`,
  },
  {
    title: 'Health & Beauty',
    path: 'health',
    element: <Supermarket />,
    subPath: `food`,
  },
  {
    title: 'Electronics',
    path: 'electronics',
    element: <Supermarket />,
    subPath: `food`,
  },
  {
    title: 'Sporting',
    path: 'sporting',
    element: <Supermarket />,
    subPath: `food`,
  },
  {
    title: 'Gaming',
    path: 'gaming',
    element: <Supermarket />,
    subPath: `food`,
  },
  {
    title: 'Home & Office',
    path: 'home',
    element: <Supermarket />,
    subPath: `food`,
  },
  {
    title: 'Books & Movies',
    path: 'books',
    element: <Supermarket />,
    subPath: `food`,
  },
];

export const subCategories = {
  supermarket: [
    'Food',
    'Beverages',
    'Breakfast Food',
    'Laundry',
    'House Cleaning',
  ],
  fashion: [
    `Women's Fashion`,
    `Men's Fashion`,
    `Kid's Fashion`,
    `Baby's Fashion`,
  ],
  Health: ['Personal Care', 'Hair Care', 'Fragrance', 'Makeup', 'Health Care'],
};
