import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer';
import Home from '../pages/Home';
import Layout from './Layout';
import Cart from '../pages/Cart';



const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/categorias/:categoryId' element={<ItemListContainer />} />
                <Route path='/producto/:productId' element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<div>404</div>} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;