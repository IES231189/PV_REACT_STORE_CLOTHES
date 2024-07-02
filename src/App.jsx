import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import MenCollection from './components/pages/MenCollection';
import ProductDetail from './components/pages/ProductDetail';
import Checkout from './components/pages/Checkout';  
import './styles.css';

function App() {
    const router = createBrowserRouter([
        {path:'/' , element:<Navigate to='/men'/>},
        { path: '/men', element: <MenCollection /> },
        { path: '/product/:productId', element: <ProductDetail /> }, 
        { path: '/checkout', element: <Checkout /> }
    ]);

    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default App;
