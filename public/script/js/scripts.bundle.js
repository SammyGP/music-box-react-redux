/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SongComponents = __webpack_require__(1);

var _SongComponents2 = _interopRequireDefault(_SongComponents);

var _VideoComponents = __webpack_require__(2);

var _VideoComponents2 = _interopRequireDefault(_VideoComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout(props) {
        _classCallCheck(this, Layout);

        var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

        _this.state = {
            playlists: "",
            youtubeData: ""
        };

        _this.componentWillMount = _this.componentWillMount.bind(_this);
        _this.handleListSubmit = _this.handleListSubmit.bind(_this);
        return _this;
    }

    _createClass(Layout, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            fetch("http://localhost:3000/user/playlist").then(function (response) {
                return response.json();
            }).then(function (data) {
                _this2.setState({ playlists: data.items });
                console.log(_this2);
            });
        }
    }, {
        key: "handleListSubmit",
        value: function handleListSubmit(e) {
            console.log(this);
            this.setState({ youtubeData: e });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            console.log("state change");

            if (this.state.playlists && !this.state.youtubeData) {

                var cells = [];
                var data = this.state.playlists;

                data.map(function (item) {
                    return cells.push(React.createElement(_SongComponents2.default, { item: item, key: item.id, onListSubmit: _this3.handleListSubmit }));
                });

                return React.createElement(
                    "div",
                    { style: { display: "grid", gridTemplateColumns: "25% 25% 25% 25%" } },
                    cells
                );
            } else if (this.state.youtubeData && this.state.playlists) {
                return React.createElement(_VideoComponents2.default, { list: this.state.youtubeData });
            } else {

                // returns loading screen until the results from the fetch are resolved
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h1",
                        null,
                        "Loading"
                    )
                );
            }
        }
    }]);

    return Layout;
}(React.Component);

ReactDOM.render(React.createElement(Layout, null), document.getElementById("app"));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrackItem = function (_React$Component) {
    _inherits(TrackItem, _React$Component);

    function TrackItem() {
        _classCallCheck(this, TrackItem);

        return _possibleConstructorReturn(this, (TrackItem.__proto__ || Object.getPrototypeOf(TrackItem)).apply(this, arguments));
    }

    _createClass(TrackItem, [{
        key: "render",
        value: function render() {

            var artists = this.props.track.track.artists.map(function (artist) {
                return artist.name + " ";
            });

            return React.createElement(
                "div",
                { style: { border: "1px solid black", padding: "5px" } },
                React.createElement(
                    "li",
                    null,
                    this.props.track.track.name,
                    " - ",
                    artists,
                    " "
                )
            );
        }
    }]);

    return TrackItem;
}(React.Component);

var Tracklist = function (_React$Component2) {
    _inherits(Tracklist, _React$Component2);

    function Tracklist(props) {
        _classCallCheck(this, Tracklist);

        var _this2 = _possibleConstructorReturn(this, (Tracklist.__proto__ || Object.getPrototypeOf(Tracklist)).call(this, props));

        _this2.state = {
            tracks: []
        };

        _this2.componentWillMount = _this2.componentWillMount.bind(_this2);
        return _this2;
    }

    _createClass(Tracklist, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this3 = this;

            console.log(this);
            fetch("http://localhost:3000/playlist/" + this.props.user + "/" + this.props.id).then(function (response) {
                return response.json();
            }).then(function (data) {
                return _this3.setState({ tracks: data.tracks.items });
            });
        }
    }, {
        key: "render",
        value: function render() {

            var STYLE = {
                overflow: "scroll",
                fontSize: "0.8em"

            };

            var tracks = [];
            var data = this.state.tracks;
            data.map(function (track) {
                return tracks.push(React.createElement(TrackItem, { track: track, key: track.track.id }));
            });

            return React.createElement(
                "div",
                { style: STYLE },
                tracks
            );
        }
    }]);

    return Tracklist;
}(React.Component);

var SongComponents = function (_React$Component3) {
    _inherits(SongComponents, _React$Component3);

    function SongComponents(props) {
        _classCallCheck(this, SongComponents);

        var _this4 = _possibleConstructorReturn(this, (SongComponents.__proto__ || Object.getPrototypeOf(SongComponents)).call(this, props));

        _this4.state = {
            viewButton: false,
            submitButton: false
        };

        _this4.handleClickView = _this4.handleClickView.bind(_this4);
        _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
        return _this4;
    }

    _createClass(SongComponents, [{
        key: "handleClickView",
        value: function handleClickView(e) {
            e.preventDefault();
            console.log("view Button Clicked");
            this.setState({ viewButton: true });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            var _this5 = this;

            console.log("submit button clicked");
            console.log(this);
            fetch("http://localhost:3000/convert", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ playlist_url: this.props.item.tracks.href })
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                console.log(response);
                return _this5.props.onListSubmit(response);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var viewButton = this.state.viewButton;
            var list = this.props.item;
            // checks if img of chosen size exist // 2nd part checks for bigger img if first not found
            var imgItem = list.images[1] ? list.images[1].url : list.images[0] ? list.images[0].url : "";

            if (viewButton) {
                return React.createElement(Tracklist, { id: list.id, user: list.owner.id });
            } else {
                return React.createElement(
                    "div",
                    { className: "listItem" },
                    React.createElement("img", {
                        src: imgItem,
                        alt: list.name
                    }),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "h3",
                            null,
                            list.name
                        ),
                        React.createElement(
                            "p",
                            null,
                            "From: ",
                            list.owner.display_name
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Songs: ",
                            list.tracks.total
                        ),
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "button",
                                { onClick: this.handleClickView },
                                "View"
                            ),
                            React.createElement(
                                "button",
                                { onClick: this.handleSubmit },
                                "Submit"
                            )
                        )
                    )
                );
            }
        }
    }]);

    return SongComponents;
}(React.Component);

exports.default = SongComponents;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SecondaryResults = function (_React$Component) {
    _inherits(SecondaryResults, _React$Component);

    function SecondaryResults() {
        _classCallCheck(this, SecondaryResults);

        return _possibleConstructorReturn(this, (SecondaryResults.__proto__ || Object.getPrototypeOf(SecondaryResults)).apply(this, arguments));
    }

    _createClass(SecondaryResults, [{
        key: "render",
        value: function render() {
            var STYLE = {
                position: "fixed",
                top: "0",
                width: "40%",
                paddingLeft: "20px",
                display: "inline-block",
                listStyleType: "none"
            };
            var elStyle = {
                border: "1px solid black",
                width: "100%",
                height: "90px",
                margin: "10px"
            };
            var imgStyle = {
                display: "inline-block",
                float: "left"
            };

            var secondaryResults = this.props.secondaryResults;
            var display = [];

            secondaryResults.map(function (item) {
                return display.push(React.createElement(
                    "li",
                    { style: elStyle, key: item.etag },
                    React.createElement("img", { style: imgStyle, src: item.snippet.thumbnails.default.url, alt: item.snippet.title }),
                    React.createElement(
                        "p",
                        null,
                        item.snippet.title
                    ),
                    React.createElement(
                        "p",
                        null,
                        item.snippet.channelTitle
                    )
                ));
            });
            if (secondaryResults) {
                return React.createElement(
                    "ul",
                    { style: STYLE },
                    display
                );
            }
            return React.createElement(
                "ul",
                { style: { display: "none" } },
                display
            );
        }
    }]);

    return SecondaryResults;
}(React.Component);

var VideoResultConfig = function (_React$Component2) {
    _inherits(VideoResultConfig, _React$Component2);

    function VideoResultConfig(props) {
        _classCallCheck(this, VideoResultConfig);

        var _this2 = _possibleConstructorReturn(this, (VideoResultConfig.__proto__ || Object.getPrototypeOf(VideoResultConfig)).call(this, props));

        _this2.state = {
            videoId: _this2.props.results.items[0].id.videoId
        };

        _this2.handleShow = _this2.handleShow.bind(_this2);
        _this2.handleChangeSongs = _this2.handleChangeSongs.bind(_this2);
        return _this2;
    }

    _createClass(VideoResultConfig, [{
        key: "handleShow",
        value: function handleShow() {
            this.props.onShow(this.props.results);
        }
    }, {
        key: "handleChangeSongs",
        value: function handleChangeSongs() {}
    }, {
        key: "render",
        value: function render() {

            var STYLE = {
                width: "50%",
                height: "98px",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                padding: "4px",
                marginTop: "4px",
                verticalAlign: "center"
            };
            var imgStyle = {
                display: "inline-block",
                float: "left"
            };
            var elStyle = {
                display: "inline-block",
                width: "40%",
                height: "100%"
            };

            var videoItem = this.props.results;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { style: STYLE },
                    React.createElement("img", { style: imgStyle, src: videoItem.items[0].snippet.thumbnails.default.url, alt: videoItem.items[0].snippet.title }),
                    React.createElement(
                        "p",
                        { style: elStyle },
                        videoItem.items[0].snippet.title
                    ),
                    React.createElement(
                        "button",
                        { style: { float: "right" }, onClick: this.handleShow },
                        "SHOW"
                    )
                )
            );
        }
    }]);

    return VideoResultConfig;
}(React.Component);

var VideoPlayer = function (_React$Component3) {
    _inherits(VideoPlayer, _React$Component3);

    function VideoPlayer(props) {
        _classCallCheck(this, VideoPlayer);

        var _this3 = _possibleConstructorReturn(this, (VideoPlayer.__proto__ || Object.getPrototypeOf(VideoPlayer)).call(this, props));

        _this3.state = {
            loaded: false,
            playlist: ["lbHYyPdQfqk", "lbHYyPdQfqk", "lbHYyPdQfqk", "lbHYyPdQfqk"]
        };

        return _this3;
    }

    _createClass(VideoPlayer, [{
        key: "compononentDidMount",
        value: function compononentDidMount() {

            var videoIds = this.props.videoIds;
            var testIds = ["lbHYyPdQfqk", "lbHYyPdQfqk", "lbHYyPdQfqk", "lbHYyPdQfqk"];

            var tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";

            var firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            var player = void 0;
            function onYouTubeIframeAPIReady() {
                player = new YT.Player(this.youtubePlayerAnchor, {
                    height: "390",
                    width: "640",
                    videoId: testIds[0],
                    events: {
                        onStateChange: this.onPlayerStateChange
                    }
                });
            }
        }
    }, {
        key: "onPlayerStateChange",
        value: function onPlayerStateChange(e) {
            if (e.data === -1 && !this.state.loaded) {
                this.player.loadPlaylist({ playlist: this.state.playlist });
                this.setState({ loaded: true });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            console.log(this);
            return React.createElement("div", { ref: function ref(r) {
                    _this4.youtubePlayerAnchor = r;
                } });
        }
    }]);

    return VideoPlayer;
}(React.Component);

var loadYT = void 0;

var TestYT = function (_React$Component4) {
    _inherits(TestYT, _React$Component4);

    function TestYT(props) {
        _classCallCheck(this, TestYT);

        var _this5 = _possibleConstructorReturn(this, (TestYT.__proto__ || Object.getPrototypeOf(TestYT)).call(this, props));

        _this5.state = {
            loaded: false,
            playlist: _this5.props.playlist
        };
        _this5.onPlayerStateChange = _this5.onPlayerStateChange.bind(_this5);
        return _this5;
    }

    _createClass(TestYT, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this6 = this;

            if (!loadYT) {
                loadYT = new Promise(function (resolve) {
                    var tag = document.createElement('script');
                    tag.src = 'https://www.youtube.com/iframe_api';
                    var firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                    window.onYouTubeIframeAPIReady = function () {
                        return resolve(window.YT);
                    };
                });
            }
            loadYT.then(function (YT) {
                _this6.player = new YT.Player(_this6.youtubePlayerAnchor, {
                    height: 390,
                    width: 640,
                    videoId: _this6.state.playlist[0],
                    events: {
                        onReady: _this6.onPlayerStateChange
                    }
                });
            });
        }
    }, {
        key: "onPlayerStateChange",
        value: function onPlayerStateChange(e) {
            this.player.loadPlaylist({ playlist: this.state.playlist });
        }
    }, {
        key: "render",
        value: function render() {
            var _this7 = this;

            console.log(this);
            return React.createElement(
                "section",
                { className: "youtubeComponent-wrapper" },
                React.createElement("div", { ref: function ref(r) {
                        _this7.youtubePlayerAnchor = r;
                    } })
            );
        }
    }]);

    return TestYT;
}(React.Component);

var VideoComponent = function (_React$Component5) {
    _inherits(VideoComponent, _React$Component5);

    function VideoComponent(props) {
        _classCallCheck(this, VideoComponent);

        var _this8 = _possibleConstructorReturn(this, (VideoComponent.__proto__ || Object.getPrototypeOf(VideoComponent)).call(this, props));

        _this8.state = {
            videoPlaybackButton: false,
            secondaryResults: [],
            videoIds: []
        };

        _this8.props.list.map(function (item) {
            return _this8.state.videoIds.push(item.items[0].id.videoId);
        });

        _this8.handleShowSecondary = _this8.handleShowSecondary.bind(_this8);
        _this8.handleSubmit = _this8.handleSubmit.bind(_this8);
        return _this8;
    }

    _createClass(VideoComponent, [{
        key: "handleShowSecondary",
        value: function handleShowSecondary(e) {
            console.log("show clicked");
            console.log(e.items);
            this.setState({ secondaryResults: e.items });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit() {
            this.setState({ videoPlaybackButton: true });
            //this.setState({videoIds: ["lbHYyPdQfqk", "lbHYyPdQfqk", "lbHYyPdQfqk" ,"lbHYyPdQfqk"]})
            console.log("Submitted");
            console.log(this);
        }
    }, {
        key: "render",
        value: function render() {
            var _this9 = this;

            var videoPlaybackButton = this.state.videoPlaybackButton;
            console.log("Render");
            console.log(this);
            if (videoPlaybackButton) {
                return React.createElement(TestYT, { playlist: this.state.videoIds });
            } else {

                var videoItem = this.props.list;
                var list = [];
                var ID = [];
                videoItem.map(function (item) {
                    ID.push(item.items[0].id.videoId);
                    return list.push(React.createElement(VideoResultConfig, { results: item, key: item.etag, onShow: _this9.handleShowSecondary }));
                });
                return React.createElement(
                    "div",
                    { style: { margin: "0", textAlign: "center", position: "relative" } },
                    React.createElement(
                        "button",
                        { onClick: this.handleSubmit },
                        "Go to Playlist"
                    ),
                    list,
                    React.createElement(SecondaryResults, { secondaryResults: this.state.secondaryResults })
                );
            }
        }
    }]);

    return VideoComponent;
}(React.Component);

exports.default = VideoComponent;

/***/ })
/******/ ]);