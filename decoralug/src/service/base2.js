import axios from 'axios'

const config = {
    baseURL: 'http://my-json-server.typicode.com/carvalhojenni/cards',
    timeout: 1000
}

const protocolo = axios.create(config)

export function getCardDoModal() {
    const url = '/Apps'
    return protocolo.get(url)
} 