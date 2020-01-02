
var streamSense = new ns_.StreamSense({}, 'http://b.scorecardresearch.com/p?c1=2&[client_id_here]&ns_site=espectador');
					var clips = [];
					streamSense.setClip(clips[1]);
					clips[1] = {
					    ns_st_cn: "1", // The clip number
					    ns_st_ci: "6352-2fe83a", // Internal Content ID
					    ns_st_pn: "1", // This is part (segment) 1 ...
					    ns_st_tp: "3", // ... of 3 parts in total
					    ns_st_ct: "vc12", // Classification Type
					    ns_st_de: "MyChannel", // Dictionary Entity
					}
					streamSense.setLabel("ns_st_mp", "jwPlayer");
    					streamSense.setLabel("ns_st_pl", "RADIO_NAMEr");
					streamSense.setLabel("ns_st_pr", "RADIO_NAMEr");

					var myJwPlayer = jwplayer('playerxLjdyRmGsrTN').setup({
										playlist: [{
											sources: [{
												file: "rtmp://50.23.243.227/livepkgr/Radio/envivo"
											},{
												file: "http://50.23.243.227/envivo.m3u8"
											}]
										}],
					    				rtmp: {
					                          bufferlength: '7'
					                          },

										width: '100%',
										height: '32',
										fallback: 'false',
										autostart: 'true',
										primary: "flash",
										ga: '{}',
										});
					myJwPlayer.onPlay(function(){
						streamSense.notify(ns_.StreamSense.PlayerEvents.PLAY, {}, myJwPlayer.getPosition());
					});

					myJwPlayer.onPause(function(){
						streamSense.notify(ns_.StreamSense.PlayerEvents.PAUSE, {}, myJwPlayer.getPosition()*1000);
					});

					myJwPlayer.onComplete(function(){
						streamSense.notify(ns_.StreamSense.PlayerEvents.END, {}, myJwPlayer.getPosition());
					});
