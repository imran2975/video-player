// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn')
const randomBtn = document.querySelector('.random-btn')
let video = document.querySelector('.video-container')

const videos = ['video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4', 'video5.mp4', 'video6.mp4'];

btn.addEventListener('click', () => {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide')
        video.play()
    } else {
        btn.classList.remove('slide')
        video.pause()
    }
})

randomBtn.addEventListener('click', () => {
    let randomIndex = Math.floor(Math.random() * videos.length)
    video.src = videos[randomIndex];
    video.load();
    video.play();
    console.log(videos[randomIndex]);
})

//preloader
const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader')
})