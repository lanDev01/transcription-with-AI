import { startLoading, stopLoading, loadingMessage } from './loading'
import { loadVideo } from './youtube-api'

const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    try {
        loadingMessage('Iniciando a aplicação')
        startLoading()

        const formData = new FormData(form)
        const url = formData.get('url')
        loadVideo(url)
    } catch (error) {
        console.log('submit_error', error)
    } finally {
        stopLoading()
    }
})