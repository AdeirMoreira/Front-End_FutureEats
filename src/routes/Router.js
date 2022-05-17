import React from "react";
import CartPage from "../pages/CartPage/CartPage"
import EstablishmentPage from "../pages/EstablishmentPage/EstablishmentPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import OrderPage from "../pages/OrderPage/OrderPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import SearchPage from "../pages/SearchPage/SearchPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import SignUpPageAndress from "../pages/SingUpAndressPage/singUpAndress";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/carrinho" element={<CartPage />} />
                <Route path="/estabelecimento" element={<EstablishmentPage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/ordem-pedido" element={<OrderPage />} />
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/buscar-pedido" element={<SearchPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path='/cadastro/endereco' element={<SignUpPageAndress />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;

