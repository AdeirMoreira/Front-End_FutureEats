export const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA'

export const headers = {
    headers: {
        auth: localStorage.getItem('token')
    }
}