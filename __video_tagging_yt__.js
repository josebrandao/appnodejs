<html>

<head>
    <title>StreamSense - Test Youtube</title>
    <script src="http://www.mailtrackpro.cl/clientservices/pruebas/streaming/video/tag_container/jspuppet/streamsense.js"></script>
</head>

<body>
    <!-- Begin comScore UDM code 1.1104.26 -->
    <script type="text/javascript">
    // <![CDATA[
		function udm_(a){
			var b="comScore=",c=document,d=c.cookie,e="",f="indexOf",g="substring",h="length",i=2048,j,k="&ns_",l="&",m,n,o,p,q=window,r=q.encodeURIComponent||escape;if(d[f](b)+1)for(o=0,n=d.split(";"),p=n[h];o<p;o++)m=n[o][f](b),m+1&&(e=l+unescape(n[o][g](m+b[h])));a+=k+"_t="+ +(new Date)+k+"c="+(c.characterSet||c.defaultCharset||"")+"&c8="+r(c.title)+e+"&c7="+r(c.URL)+"&c9="+r(c.referrer),a[h]>i&&a[f](l)>0&&(j=a[g](0,i-8).lastIndexOf(l),a=(a[g](0,j)+k+"cut="+r(a[g](j+1)))[g](0,i)),c.images?(m=new Image,q.ns_p||(ns_p=m),m.src=a):c.write("<p><img src='",a,"' height='1' width='1' alt='*'></p>");
			}
		udm_("http://b.scorecardresearch.com/p?c1=2&c2=7672322&ns_site=excelsior&name=funcion.fotogaleria.el_nuevo_batman_muere_por_ser_pareja_de_halle_berry");
			// ]]>

    </script>
    <noscript>
        <p style="display:none;"><img src="http://b.scorecardresearch.com/p?c1=2&c2=7672322&ns_site=excelsior&name=funcion.fotogaleria.el_nuevo_batman_muere_por_ser_pareja_de_halle_berry" height="1" width="1" alt="*"></p>
    </noscript>
    <!-- End comScore UDM code -->
    <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
    <div id="player"></div>
    <script type="text/javascript">
        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player1;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '315',
                width: '560',
                videoId: '6as8ahAr1Uc',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }
        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
            event.target.playVideo();
            //event.target.mute();
        }
        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;
        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
                setTimeout(stopVideo, 6000);
                done = true;
            }
        }
        function stopVideo() {
            player.stopVideo();
        }
    </script>
</body>
<!-- Aca es creado los objectos de StremSense y sus estancias -->
<script type="text/javascript">
    var streamSense = new ns_.StreamSense({}, 'http://b.scorecardresearch.com/p?c1=2&c2=7672322&c3=excelsior&ns_site=excelsior');
    var clips = [];
    clips[1] = {
        ns_st_pl: "the playlist title", //A description of the content in the playlist. For example the program title in case the playlist only contains episodes from a TV show.
        ns_st_pr: "the program title", //Top level content title (i.e., the name of the overall program, show, or content series). Can be used with ns_st_ep to tag TV shows on program and episode level.
        ns_st_ep: "the episode title", //Sub level content title (i.e., the title of the specific episode). Can be used with ns_st_pr to tag TV shows on program and episode level.
        ns_st_dt: "2009-10-30", //The date on which the content was broadcast or produced (in yyyy-mm-dd format)
        ns_st_st: "station", //Title of the station or channel for which content was recorded or String where content is made available.
        ns_st_ty: "vod", //video
        ns_st_ci: "funcion.fotogaleria.el_nuevo_batman_muere_por_ser_pareja_de_halle_berry", //Content or asset ID. Your internal unique identification of each content asset(5).
        ns_st_ge: "espectaculos" //Content genre description
    }
    streamSense.setClip(clips[1]);
    function onPlayerStateChange(event) {
        if (player.getPlayerState() == 1) {
            console.log("play is ok here")
            streamSense.setLabel("name", "cliente.comercial");
            streamSense.setLabel("ns_st_mp", "Youtube Player");
            streamSense.getClip().setLabel("ns_st_cl", player.getDuration() * 1000);
            streamSense.notify(ns_.StreamSense.PlayerEvents.PLAY, {}, player.getCurrentTime() * 1000);
        } else if (player.getPlayerState() == 2) {
            console.log("pause is ok here")
            streamSense.notify(ns_.StreamSense.PlayerEvents.PAUSE, {}, player.getCurrentTime() * 1000);
        } else if (player.getPlayerState() == 0) {
            console.log("END is ok here")
            streamSense.notify(ns_.StreamSense.PlayerEvents.END, {}, player.getCurrentTime() * 1000);
        }
    }
</script>
</html>
