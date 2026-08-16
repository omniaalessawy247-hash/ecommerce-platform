import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

import App from './App';
import Allhome from './Home/Allhome';
import Allcart from './Cart/Allcart';
import Allfashion from './Fashionpage/Allfashion';
import Alluserprofile from './Userprofile/Alluserprofile';
import Alllogin from './Login/Alllogin';
import Allsupermarket from './Supermarket/Allsupermarket';
import Allpetcare from './Petcare/Allpetcare';
import Allbabycare from './Babycare/Allbabycare';
import Allbooks from './Books/Allbooks';
import Allbags from './Bags/Allbags';
import Kidsclothing from './Kidsclothing/Kidsclothing';
import Mensclothing from './Mensclothing/Mensclothing';
import Womensclothing from './Womensclothing/Womensclothing';
import Allmakeupperfums from './Makeupperfums/Allmakeupperfums';
import Allshoes from './Shoes/Allshoes';
import Allwishlist from './wishlist/Allwishlist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Allhome /> },
      { path: 'cart', element: <Allcart /> },
      { path: 'fashion', element: <Allfashion /> },
      { path: 'userprofile', element: <Alluserprofile /> },
      { path: 'login', element: <Alllogin /> },
      { path: 'supermarket', element: <Allsupermarket /> },
      { path: 'petcare', element: <Allpetcare /> },
      { path: 'babycare', element: <Allbabycare /> },
      { path: 'books', element: <Allbooks /> },
      { path: 'wishlist', element: <Allwishlist /> },
      { path: 'bags', element: <Allbags /> },
      { path: 'kidsclothing', element: <Kidsclothing /> },
      { path: 'mensclothing', element: <Mensclothing /> },
      { path: 'womensclothing', element: <Womensclothing /> },
      { path: 'makeupperfums', element: <Allmakeupperfums /> },
      { path: 'shoes', element: <Allshoes /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);