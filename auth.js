var express = require("express");
var router = express.Router();
// var app = express(); not needed?
var keys = require("./config");
var client_id = keys.SPOTIFY_ID;
var client_secret = keys.SPOTIFY_KEY;
var qs = require("querystring");
var request = require("request");
//app.set("view engine", "ejs");
//app.use(express.static("public"));

const tokens = "";

router.get("/auth", function(req, res){
	var authUrl = qs.stringify({
		client_id: client_id,
		response_type: "code",
		scope: "playlist-read-private",
		redirect_uri: "http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com/callback",
		show_dialog: true
	})
	console.log("works?")
	res.json({url: "https://accounts.spotify.com/authorize?" + authUrl})
	//res.redirect("https://accounts.spotify.com/authorize?" + authUrl)
})

router.get("/callback", function(req, res){
	if(req.query.error){
		console.log("error occured ");
		res.redirect("/");
	}

	var authOptions = {
		url: "https://accounts.spotify.com/api/token",
		form: {
			grant_type: "authorization_code",
			code: req.query.code,
			redirect_uri: "http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com/callback"
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

			res.redirect("/#" + body.access_token);
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

module.exports = {
	router: router
};