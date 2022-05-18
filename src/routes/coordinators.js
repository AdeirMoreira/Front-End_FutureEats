export const goToFeedPage = (navigate) => {
    navigate('/feed')
}

export const goToRestDetails = (navigate, id) => {
    navigate(`/estabelecimento/${id}`)
}

export const goToCart = (navigate) => {
    navigate('/carrinho')
}

export const goToProfile = (navigate) => {
    navigate('/perfil')
}