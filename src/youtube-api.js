import { loadingMessage } from "./loading";

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


Window.YTPlayer = null

function getVideoId(url) {
    const [part1, part2] = url.split('?v=')
    const [videoId] = part2.split('&')
    return videoId
}

export function loadVideo(url) {
    loadingMessage('Carregando video do Youtube')

    window.YTPlayer = new YT.Player('youtubeVideo', {
        videoId: getVideoId(url)
    })
}