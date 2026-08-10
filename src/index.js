import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import App from './App';  
import Allhome from './Home/Allhome';
import Allnavbar from './Home/Allnavbar';
import Allfooter from './Home/Allfooter';
import Allcart from './Cart/Allcart';
import { CartProvider } from 'react-use-cart';
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
        path: "/", 
        element: <App />,  
    },
  
    {
        path: "Home", 
        element: <Allhome />,  
    },
     
    {
        path: "Home", 
        element:<Allnavbar/>,
    },
     
    {
        path: "Home", 
        element: <Allfooter />,  
    },
    {
        path: "Cart", 
        element: <Allcart />,  
    },
    {
        path: "Fashion", 
        element:  <Allfashion/>,  
    },
 
    {
        path: "Userprofile", 
        element:  <Alluserprofile/>  ,
    },
   
    {
        path: "Login", 
        element:  <Alllogin/>,
    },
   
    {
        path: "Supermarket", 
        element:  <Allsupermarket/>,
    },
   
    {
        path: "Petcare", 
        element: <Allpetcare/> ,
    },
   
    {
        path: "Babycare", 
        element: <Allbabycare/> ,
    },
    {
        path: "Books", 
        element: <Allbooks/> ,
    },
    {
        path: "Wishlist", 
        element: <Allwishlist/> ,
    },
    {
        path: "Bags", 
        element: <Allbags/> ,
    },
    {
        path: "Kidsclothing", 
        element: <Kidsclothing/> ,
    },
    {
        path: "Mensclothing", 
        element: <Mensclothing/> ,
    },
    {
        path: "Womensclothing", 
        element: <Womensclothing/> ,
    },
    {
        path: "Makeupperfums", 
        element: <Allmakeupperfums/> ,
    },
    {
        path: "Shoes", 
        element: <Allshoes/> ,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router={router} />
       
);
