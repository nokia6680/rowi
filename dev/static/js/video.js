var body = document.querySelector('.body');
var videoBtn = document.querySelector('.about__play');
var videoFrame = document.getElementById('aboutVideo');
//var videoPoster = document.querySelector('.about__player-poster');

if (videoBtn) {
    videoBtn.addEventListener('click', function() {
        videoBtn.classList.add('playState');
        videoFrame.classList.add('active');
        //videoPoster.classList.add('hidden');
        videoFrame.play();
        videoFrame.setAttribute("controls", "controls");
    });
};

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            videoFrame.pause();
            // videoFrame.currentTime = 0;
            // videoFrame.classList.remove('active');
            // videoBtn.classList.remove('playState');
            // videoFrame.load();
            // videoFrame.removeAttribute("controls");

        } else {
            videoFrame.pause();
            // videoFrame.currentTime = 0;
            // videoFrame.classList.remove('active');
            // videoBtn.classList.remove('playState');
            // videoFrame.load();
            // videoFrame.removeAttribute("controls");
        }
    });
});

videoFrame.onended = function () {
    videoFrame.currentTime = 0;
    videoFrame.classList.remove('active');
    videoBtn.classList.remove('playState');
    videoFrame.load();
    videoFrame.removeAttribute("controls");
};

//
// function stopVideo() {
//   player.pause();
//   if (player.currentTime) player.currentTime = 0;
// }
//
// function resetPlayer() {
//     progressBar.value = 0;
//     // Move the media back to the start
//     player.currentTime = 0;
//     // Set the play/pause button to 'play'
//     changeButtonType(btnPlayPause, 'play');
// }
//
var benePlay = document.querySelector('.benefits__play');
var beneWrap = document.querySelector('.popup-video');
var beneVideo = document.getElementById('benVideo');
var beneCloser = document.querySelector('.popup-video__closer');
var beneReplay = document.querySelector('.popup-video__play');

if (benePlay) {
    benePlay.addEventListener('click', function() {
        beneWrap.classList.add('active');
        beneVideo.play();
        beneVideo.setAttribute("controls", "controls");
        swiper.autoplay.stop()
        body.classList.add('no-scroll');
    });
};

if (beneCloser) {
    beneCloser.addEventListener('click', function() {
        beneWrap.classList.remove('active');
        beneVideo.pause();
        beneVideo.load();
        beneVideo.currentTime = 0;
        swiper.autoplay.start()
        body.classList.remove('no-scroll');
        beneVideo.removeAttribute("controls");
    });
};

beneWrap.addEventListener("click", function(event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".popup-video__player")) return;

    // If user clicks outside the element, hide it!
    beneWrap.classList.remove('active');
    beneVideo.pause();
    beneVideo.load();
    beneVideo.currentTime = 0;
    swiper.autoplay.start()
    body.classList.remove('no-scroll');
    beneVideo.removeAttribute("controls");
});

beneVideo.onended = function () {
    beneVideo.currentTime = 0;
    beneVideo.load();
    beneReplay.classList.add('visibleState');
    beneReplay.classList.remove('playState');
    beneVideo.removeAttribute("controls");
};

beneReplay.addEventListener('click', function() {
    beneVideo.play();
    beneVideo.setAttribute("controls", "controls");
    beneReplay.classList.add('playState');
    beneReplay.classList.remove('visibleState');
});
