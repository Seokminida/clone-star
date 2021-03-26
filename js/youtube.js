// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  //<div id="player"></div>
  player = new YT.Player('player', {
    videoId: 'twLc_bxqnBY', //영상 아이디
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop: true, //반복 재생 유무
      playlist: 'twLc_bxqnBY' //반복 재생할 유튜브 아이디
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }
  });
}
