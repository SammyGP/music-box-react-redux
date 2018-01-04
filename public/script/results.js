console.log("Results are loaded");

// global var to access the song container to be able to edit it when replacing songs
// gets assigned when clicking on change song
var oldSongContainer;

// if the song was not found or if the video is not the one expected
// run these functions on click to get a new list of suggested songs
function getNewSong(name) {
	var request = new Request(`http://localhost:3000/convert/${name}`);
	fetch(request)
	.then(function(response){

		// removes the previous popup list if any
		if(document.querySelector(".track-popup")) {
			document.querySelector(".track-popup").remove();
		}
		console.log("done");
		return response.json();
	}).then(function(data){
		data = JSON.parse(data);
		data = data.items;
		var container = document.createElement("ul");
		container.classList.add("track-popup");

		// gets the data from every song (currently 5) from the response
		data.forEach(function(song){
			var li = document.createElement("li");
			li.dataset.id = song.id.videoId;
			li.dataset.img = song.snippet.thumbnails.default.url;
			li.dataset.title = song.snippet.title;

			var img = document.createElement("img");
			img.src = song.snippet.thumbnails.default.url;
			li.appendChild(img);

			var p = document.createElement("p");
			p.innerHTML = song.snippet.title;
			li.appendChild(p);
			container.appendChild(li);
		})
		document.querySelector("body").appendChild(container);
	})
}
function setNewSong(newSong) {

	// gets the nessesary values from the new to be added newSong
	var id = newSong.target.dataset.id;
	var title = newSong.target.dataset.title;
	var img = newSong.target.dataset.img;

	console.log("New  song is" + title);
	console.log("Old song is" + oldSongContainer.dataset.title)

	// changes the old song dataset with the new values
	oldSongContainer.dataset.id = id;
	oldSongContainer.dataset.title = title;
	oldSongContainer.dataset.img = img;

	// changes the old song children (img, id and title)
	oldSongContainer.childNodes[1].src = img;
	oldSongContainer.childNodes[3].innerHTML = title;
	oldSongContainer.childNodes[5].defaultValue = id;

}

window.addEventListener("click", function(e){
	console.log(e);
	// checks if the click target is the change song button
	if(e.target.className === "change-song") {
		var searchQuery = e.path[2].dataset.title;
		oldSongContainer = e.target.parentNode.parentNode;
		getNewSong(searchQuery);
	}
	// checks if the click target is the li generated from the getNewSong function
	if(e.target.tagName === "LI") {
		setNewSong(e);
		console.log(oldSongContainer);
	}
	if(e.target.className === "delete") {
		e.target.parentNode.parentNode.remove();
	}
})