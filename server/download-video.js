import ytdl from "ytdl-core";
import fs from 'fs'

export const downloader = (videoId) => new Promise((resolve, reject) => {
    const videoURL = 'http://youtube.com/watch?v=' + videoId
    console.log('[STARD_DOWNLOAD] ', videoURL)
    
    ytdl(videoURL, {
        quality: 'lowestaudio',
        filter: 'audioonly',
    })
    .on('end', () => {
        console.log('[FINESHED_DOWNLOAD]')
        resolve()
    })
    .on('error', () => {
        console.log('[ERROR_DOWNLOAD]')
        reject('[ERROR_DOWNLOADIN_VIDEO]')
    })
    .pipe(fs.createWriteStream('audio.mp4'))
})
