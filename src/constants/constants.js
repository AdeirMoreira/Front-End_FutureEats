export const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA'

export const headers = {
    headers: {
        auth: localStorage.getItem('token')
    }
}

export const setHeader = (response) => {
    response && (headers.headers.auth = response.data.token)
    !headers.headers.auth && (headers.headers.auth = window.localStorage.getItem('token'))
}