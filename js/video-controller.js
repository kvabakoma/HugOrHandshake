var currentChannel = 1;
var loadStatus = [false, false, false]
var player1 = videojs("my-video1"/* , {
    controls:true,
    fluid: true,
    autoplay: false,
    controlBar: {
        fullscreenToggle: false,
        controls:false,
        children: [
            "currentTimeDisplay",
            "timeDivider",
            "durationDisplay",
            "progressControl",
            "remainingTimeDisplay" //ensure we show the remaining time display here
        ]
    }
} */)
var player2 = videojs("my-video2"/* , {
    controls:true,
    fluid: true,
    autoplay: false,
    controlBar: {
        fullscreenToggle: false,
        controls:false,
        children: [
            "currentTimeDisplay",
            "timeDivider",
            "durationDisplay",
            "progressControl",
            "remainingTimeDisplay" //ensure we show the remaining time display here
        ]
    }
} */)
var player3 = videojs("my-video3"/* , {
    controls:true,
    fluid: true,
    autoplay: false,
    controlBar: {
        fullscreenToggle: false,
        controls:false,
        children: [
            "currentTimeDisplay",
            "timeDivider",
            "durationDisplay",
            "progressControl",
            "remainingTimeDisplay" //ensure we show the remaining time display here
        ]
    }
} */)
var players = [player1, player2, player3]
player1.ready(function () {
    player1.tech_.off('dblclick');
    console.log('ready ',1)
    loadStatus[0] = true
    console.log(loadStatus.indexOf(false))
    if (loadStatus.indexOf(false) < 0) {
        players.forEach(player => {
            player.play()
        })
    }
});
player2.ready(function () {
    player2.tech_.off('dblclick');
    console.log('ready ',2)
    loadStatus[1] = true
    console.log(loadStatus.indexOf(false))
    if (loadStatus.indexOf(false) < 0) {
        players.forEach(player => {
            player.play()
        })
    }
});
player3.ready(function () {
    player3.tech_.off('dblclick');
    console.log('ready ',3)
    loadStatus[2] = true
    console.log(loadStatus.indexOf(false))
    if (loadStatus.indexOf(false) < 0) {
        players.forEach(player => {
            // console.log(player)
            //player.play()
        })
    }
});


// myPlayer.bufferedPercent();


$(document).ready(function () {
    console.log("doc ready");
    
    // FULLSCREEN
    var isFullScreen = false;
    $("#btn-toggle-fullscreen").click(function () {
        if (isFullScreen) {
            $( "#video-container" ).removeClass("video-front rotated90")
        } else {
            $( "#video-container" ).addClass("video-front")
            if (window.innerHeight > window.innerWidth) $( "#video-container" ).addClass("rotated90")
        }
        isFullScreen = !isFullScreen;
    });
    
    // PLAY / PAUSE
    $("#btn-play").click(function () {
        console.log("Play called.");
        if (players[0].paused()) {
            $("#btn-play").html('<i class="fa fa-pause"></i>')
            players.forEach(player => {
                player.play()
            })
        } else {
            $("#btn-play").html('<i class="fa fa-play"></i>')
            players.forEach(player => {
                player.pause()
            })
        }
        
    });
    
    // SWITCH CHANNEL
    $("#btn-channel-1").click(function () {
        console.log("Handler for 1 called.");
        if (currentChannel != 1) {
            currentChannel = 1;
            $("#my-video1").css("z-index", "20");
            $("#my-video2").css("z-index", "10");
            $("#my-video3").css("z-index", "10");
        }
    });
    
    $("#btn-channel-2").click(function () {
        console.log("Handler for .2 called.");
        if (currentChannel != 2) {
            currentChannel = 2;
            $("#my-video1").css("z-index", "10");
            $("#my-video2").css("z-index", "20");
            $("#my-video3").css("z-index", "10");
        }
    });
    
    $("#btn-channel-3").click(function () {
        console.log("Handler for 3 called.");
        if (currentChannel != 3) {
            currentChannel = 3;
            $("#my-video1").css("z-index", "10");
            $("#my-video2").css("z-index", "10");
            $("#my-video3").css("z-index", "20");
        }
    });
    
    // SCREEN RESIZE
    /* $( window ).resize(function() {
        console.log(window.innerWidth, window.innerHeight);
    }); */
    $( window ).on( "orientationchange", function( event ) {
        console.log(event.orientation)
        if (isFullScreen) $( "#video-container" ).toggleClass("rotated90")
        // $( "#orientation" ).text( "This device is in " + event.orientation + " mode!" );
    });
    $( window ).orientationchange();
}); 