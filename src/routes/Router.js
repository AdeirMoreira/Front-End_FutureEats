import React from "react";
import CartPage from "../pages/CartPage/CartPage"
import EstablishmentPage from "../pages/EstablishmentPage/EstablishmentPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import EditarCadastroPage from "../pages/ProfilePage/EditarCadastroPage";
import EditarEnderecoPage from "../pages/ProfilePage/EditarEnderecoPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import SignUpPageAndress from "../pages/SingUpAndressPage/singUpAndress";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/carrinho" element={<CartPage />} />
                <Route path="/estabelecimento/:id" element={<EstablishmentPage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/perfil/editar-endereco" element={<EditarEnderecoPage/>}/>
                <Route path="/perfil/editar-cadastro" element={<EditarCadastroPage/>}/>
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path='/cadastro/endereco' element={<SignUpPageAndress />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;

