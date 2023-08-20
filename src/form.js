import axios from 'axios'
import { startLoading, stopLoading, loadingMessage } from './loading'
import { getVideoId, loadVideo } from './youtube-api'
import { transcribeAudio } from './transcribe'
import { renderText } from './render'

const form = document.querySelector('#form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    try {
        loadingMessage('Iniciando a aplicação')
        startLoading()

        const formData = new FormData(form)
        const url = formData.get('url')
        await loadVideo(url)

        loadingMessage('Baixando e convertando o video')
        await axios.get('http://localhost:3333/audio?v=' + getVideoId(url))

        const data = await transcribeAudio()
        renderText(data)
    } catch (error) {
        console.log('submit_error', error)
    } finally {
        stopLoading()
    }
})