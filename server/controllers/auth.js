var express = require("express");
var router = express.Router();
var keys = require("../config");
var client_id = keys.SPOTIFY_ID;
var client_secret = keys.SPOTIFY_KEY;
var qs = require("querystring");
var request = require("request");
//app.set("view engine", "ejs");
//app.use(express.static("public"));

const tokens = "";
const callbackURL = "http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com/callback";

router.get("/auth", function(req, res){
	const scope = "playlist-read-private"
	const authUrl = qs.stringify({
		client_id: client_id,
		response_type: "code",
		scope,
		redirect_uri: "http://localhost:8080/callback",
		show_dialog: true /* makes the user need to approve of the app everytime set to false on build */
	})
	res.send({url: "https://accounts.spotify.com/authorize?" + authUrl})
})

router.get("/callback", function(req, res){
	if(req.query.error){
		console.log(`error occured ${req.query.error}`);
		res.send({error: req.query.error});
	}

	const authOptions = {
		url: "https://accounts.spotify.com/api/token",
		form: {
			grant_type: "authorization_code",
			code: req.query.code,
			redirect_uri: "http://localhost:8080/callback"
		},
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Accept": "application/json",
			"authorization": "Basic " + (new Buffer(client_id + ':' + client_secret).toString('base64'))
		},
		json: true
	}

	request.post(authOptions, function(err, response, body){
		if(err){
			console.log("error loading page");
			console.log(err)
		} else {
			let access_token = body.access_token;
			let refresh_token = body.refresh_token;
			
			console.log("auth done")

			//res.json({auth: "yes"})
			res.redirect("http://localhost:3000/?#&access=" + body.access_token + "&refresh=" + body.refresh_token + "&expire=" + body.expires_in);
		}
	});
})

router.get("/api/tokens", function(req, res){
	if(tokens) {
		res.json({tokens});
	} else {
		res.json({tokens: false})
	}
	
});

router.get("/auth/tokens/:refresh_token", function(req, res) {
	const refresh_token = req.params.refresh_token;
	console.log(refresh_token)
});

module.exports = {
	router: router
};