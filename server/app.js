var bodyParser 	= require("body-parser"),
KEYS			= require("./config"),
express 		= require("express"),
app 		   	= express(),
request			= require("request"),
auth 			= require("./controllers/auth"),
authRouter		= auth.router,
cors			= require("cors");
// not vialbe for release to have tokens like this
// look inte pushing token to front end?

/******************************/
// no longer needed since i handle the tokens in the front end
//tokens			= auth.tokens;

const songRouter = require("./controllers/song-controller");



//app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());



// gets all the tracks from the selected playlist and sends them to the frontend with a fetch request
app.get("/playlist/:user/:id/:token", function(req, res){
	const user = req.params.user.toString().trim();
	const id = req.params.id.toString().trim();	
	const token = req.params.token.toString().trim();

	let userTracks = {
		url: `https://api.spotify.com/v1/users/${user}/playlists/${id}`,
		headers: {
			"Authorization": "Bearer " + token,
			"Accept": "application/json"
		}
	}
	request(userTracks, function(err, response, body){
		console.log(userTracks);
		if(err) {
			console.log(err);
		} else {
			let result = JSON.parse(body);

			// needs to be a res.send for the fetch api to recieve
			res.send(body);
		}
	})
});

// JSON of user playlists track
app.get("/user/playlist/:token", songRouter);


// spotify playlist submission
app.post("/convert/:token", function(req, res){

	// posts the search_query object containing a string for each artist and song


	//
	// TODO fix the post request
	// i get the data but now i need to figure out how to DISPLAY the data to the user
	//

	var spotifyList = false;

	/*****  *******/
	// TEST

	fetch({
		url: req.body.playlist_url, 
		headers: {
		"Authorization": "Bearer " + req.params.token,
		"Accept": "application/json"
		}		
	})
	.then((response) => { return JSON.parse(response) })
	.then((response) => {
		let searchData = [];
		response.items.map((track) => {
			let artists = track.track.artists.map((artist) => {return " " + artist.name + " "});
			searchData.push(track.track.name + artists);
		})
		return searchData })
	.then((response) => { 
		let data = [];
		let counter = 0;
			response.map((track) => {
				fetch({
					url:`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${KEYS.YOUTUBE_KEY}&q=${track}`,
					headers: {
						"Accept": "application/json"
					}
				})
				.then((response) => { return JSON.parse(response) })
				.then((response) => { return data.push(response) })
				.then(() => { 
					counter++;
					console.log(counter);
					console.log(response.length);
					if(counter === (response.length)) {
						console.log("done handling data");
						counter = 1;
						return res.send(data);
					}
				})
				.catch((error) => { 
					counter++;
					console.log("Following track not added: " + track);
					return console.log(error); 
				})
			})
	})
	.catch((error) => { 
		console.log("token expired?"); 
		console.log(error);
	})

	/******  ******/

});

// search youtube for query endpoint
app.get("/convert/:id", function(req, res){
	fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${KEYS.YOUTUBE_KEY}&q=${req.params.id}`)
	.then(function(response){
		console.log("someone requested" + req.params.id);
		res.json(response);
	})
})

// VIDEO playback
app.post("/playback", function(req, res){
	var data = req.body;
	//data = JSON.stringify(data);
	app.set("videoIds", data)
	res.render("video");
})

app.get("/playback/json", function(req, res){
	var data = app.get("videoIds");
	res.json(data);
})

// temporary endpoint just to view the json data
app.get("/data", function(req, res){
	var newReleases = {
		url: "	https://api.spotify.com/v1/browse/new-releases?limit=10",
		headers: {
			"Authorization": "Bearer " + tokens.access_token,
			"Accept": "application/json"
		}
	}
	request(newReleases, function(err, response, body){
		data = JSON.parse(body);
	})
})


// authentication 
// if user is not authenticated (ie tokens.access_token is ==== 0) user from index will be redirected to /auth
app.get("/auth", authRouter);
app.get("/auth/tokens/:refresh_token", authRouter);
app.get("/callback", authRouter);
app.get("/api/tokens", authRouter);

var port = process.env.PORT || 8080;

app.listen(port, function(){
	console.log("Server is up");
	console.log("on port " + port)
});