var videoBtn = document.querySelector('.about__play');
var video = document.querySelector('.about__video');

if (videoBtn) {
    videoBtn.addEventListener('click', function() {
        video.play();
        video.controls = true;
        videoBtn.classList.add('playState');
    });
}

//
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {
            video.pause();
            video.controls = false;
            videoBtn.classList.remove('playState');
        } else {
            video.pause();
            video.controls = false;
            videoBtn.classList.remove('playState');
        }
    });
});
//
// if (videoClose) {
//   videoClose.addEventListener('click', function () {
//     videoOverlay.classList.remove('active');
//     body.classList.remove('no-scroll');
//   });
// }
//
// function playTrailer() {
//   document.getElementById("myVideo").load();
// } // Expand and close
//
//
// var aboutBtn = document.querySelector('.intro__more');
// var aboutWrapper = document.querySelector('.intro__about');
//
// if (aboutBtn) {
//   aboutBtn.addEventListener('click', function () {
//     event.preventDefault();
//     aboutWrapper.classList.toggle('active');
//     this.textContent = this.textContent === 'Читать далее' ? 'Скрыть' : 'Читать далее';
//   });
// } // Pause and play
//
//
// var video = document.getElementById("myVideo");
// var videoControl = document.getElementById("pauseBtn");
//
// function videoPause() {
//   if (video.paused) {
//     video.play();
//     videoControl.classList.remove('paused');
//     videoControl.innerHTML = "Пауза";
//   } else {
//     video.pause();
//     videoControl.classList.add('paused');
//     videoControl.innerHTML = "Включить";
//   }
// } // video responsive loading
//
//
// function desktopVideo(x) {
//   if (x.matches) {
//     video.pause();
//     video.load();
//     video.muted = false;
//     video.controls = true;
//     video.autoplay = false;
//   } else {
//     video.pause();
//     video.load();
//     video.muted = true;
//     video.controls = false;
//     video.autoplay = true;
//   }
// }
//
// $(function () {
//   $('#heading').addClass('active');
//   $('#intro').addClass('active');
// });
// var x = window.matchMedia("(max-width: 719px)");
// desktopVideo(x);
// x.addListener(desktopVideo);
