import React, { useState } from 'react'
import cartGreen from '../../assets/Images/cartGreen.svg'
import cartGray from '../../assets/Images/cartGray.svg'
import homeGray from '../../assets/Images/homeGray.svg'
import homeGreen from '../../assets/Images/homeGreen.svg'
import profileGray from '../../assets/Images/profileGray.svg'
import profileGreen from '../../assets/Images/profileGreen.svg'
import { useNavigate } from 'react-router-dom'
import {goToCart, goToFeedPage, goToProfile} from '../../routes/coordinators'

function Footer() {
    let urlPage = ""  

    const url = window.location.pathname.substr(1)

    const navigate = useNavigate();
    
     if (url === "") {
      urlPage = "feed"
    } else if (url === "perfil") {
      urlPage = "perfil"
    }  else if (url === "carrinho") {
      urlPage = "carrinho"
    }

    const [page, setPage] = useState(urlPage)
    

    const changeToHome = () => {
      goToFeedPage(navigate)
      setPage("feed")
      
    }

    const changeToCart = () => {
      goToCart(navigate)
      setPage("carrinho")
      
    }

    const changeToProfile = () => {
      goToProfile(navigate)
      setPage("perfil")
      
    }
  return (
    <div>
        <button onClick={changeToHome}>{page==='feed'?<img alt='icone-home' src={homeGreen} />:<img alt='icone-home' src={homeGray} />}</button>
        <button onClick={changeToCart}>{page==='carrinho'?<img alt='icone-carrinho' src={cartGreen} />:<img alt='icone-carrinho' src={cartGray} />}</button>
        <button onClick={changeToProfile}>{page==='perfil'?<img alt='icone-perfil' src={profileGreen} />:<img alt='icone-perfil' src={profileGray} />}</button>
    </div>
  )
}

export default Footer