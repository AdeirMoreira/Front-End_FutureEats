export const goToFeedPage = (navigate) => {
    navigate('/feed')
}

export const goToEditarCadastroPage = (navigate) => {
    navigate('/perfil/editar-cadastro')
}
export const goToEditarEndereçoPage = (navigate) => {
    navigate('/perfil/editar-endereco')
}
export const goToBack = (navigate) => {
    navigate(-1)
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

export const goToSignUpAddress = (navigate) => {
    navigate('/cadastro/endereco')
}

