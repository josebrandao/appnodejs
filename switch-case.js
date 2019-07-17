var x = myJwPlayer.getState();
	switch(x)
	{
		case "PLAYING":
			streamSense.notify(ns_.StreamSense.PlayerEvents.PLAY, {}, myJwPlayer.getPosition() * 1000 );
			console.log("is playing");
		break;
			case "PAUSED":
			console.log("is paused");
		break;
	}
