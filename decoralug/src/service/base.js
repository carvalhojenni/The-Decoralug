import axios from 'axios'

const config = {
    baseURL: 'http://my-json-server.typicode.com/carvalhojenni/cards',
    timeout: 1000
}

const protocolo = axios.create(config)

export function getCard() {
    const url = '/noticias'
    return protocolo.get(url)
} 