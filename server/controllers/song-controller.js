const express = require("express");
const router = express.Router();
const request = require("request");

// JSON of user playlists track
router.get("/user/playlist/:token", (req, res) => {

    // PASS THROUGH VALIDATOR FIRST

	const userPlaylist = {
		url: "https://api.spotify.com/v1/me/playlists?",
		headers: {
			"Authorization": "Bearer " + req.params.token.toString(),
			"Accept": "application/json"
		}
	}
	request(userPlaylist, function(err, response, body) {
		var data = JSON.parse(body);
		res.send(data);
	})
})

const songRouter = router;

module.exports = songRouter;
