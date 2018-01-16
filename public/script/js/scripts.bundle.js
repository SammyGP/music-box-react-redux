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

var _Auth = __webpack_require__(3);

var _Auth2 = _interopRequireDefault(_Auth);

var _Tutorial = __webpack_require__(4);

var _Tutorial2 = _interopRequireDefault(_Tutorial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav(props) {
        _classCallCheck(this, Nav);

        var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

        _this.state = {
            activeColor: "#930000",
            defaultColor: "#000000"

        };
        return _this;
    }

    _createClass(Nav, [{
        key: "render",
        value: function render() {
            var color = this.props.colorSchema;
            return React.createElement(
                "nav",
                { className: "nav", style: { boxShadow: "0px 3px 3px " + color } },
                React.createElement(
                    "h1",
                    null,
                    React.createElement(
                        "a",
                        { href: "/" },
                        "Song Box"
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h3",
                        null,
                        "Songs"
                    ),
                    React.createElement(
                        "h3",
                        null,
                        ">"
                    ),
                    React.createElement(
                        "h3",
                        null,
                        "Results"
                    ),
                    React.createElement(
                        "h3",
                        null,
                        ">"
                    ),
                    React.createElement(
                        "h3",
                        null,
                        "Videos"
                    )
                )
            );
        }
    }]);

    return Nav;
}(React.Component);

var Layout = function (_React$Component2) {
    _inherits(Layout, _React$Component2);

    function Layout(props) {
        _classCallCheck(this, Layout);

        var _this2 = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

        _this2.state = {
            playlists: "",
            youtubeData: "",
            tokens: ""
        };

        //this.componentWillMount = this.componentWillMount.bind(this);
        _this2.handleListSubmit = _this2.handleListSubmit.bind(_this2);
        _this2.handleAuth = _this2.handleAuth.bind(_this2);
        return _this2;
    }

    _createClass(Layout, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            var _this3 = this;

            console.log(this.state);
            if (!this.state.playlists && this.state.tokens) {
                fetch("http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com/user/playlist/" + localStorage.getItem("token")).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    _this3.setState({ playlists: data.items });
                });
            }
        }
    }, {
        key: "handleListSubmit",
        value: function handleListSubmit(e) {
            this.setState({ youtubeData: e });
        }
    }, {
        key: "handleAuth",
        value: function handleAuth(e) {
            console.log(e);
            this.setState({ tokens: e });
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            console.log("state change");
            console.log(this);
            if (this.state.playlists && !this.state.youtubeData) {

                var cells = [];
                var data = this.state.playlists;

                data.map(function (item) {
                    return cells.push(React.createElement(_SongComponents2.default, {
                        item: item, key: item.id,
                        onListSubmit: _this4.handleListSubmit,
                        tokens: _this4.state.tokens
                    }));
                });

                return React.createElement(
                    "div",
                    null,
                    React.createElement(Nav, { view: "song", colorSchema: "#2eb039" }),
                    React.createElement(
                        "div",
                        { style: { display: "grid", gridTemplateColumns: "25% 25% 25% 25%" } },
                        cells
                    )
                );
            } else if (this.state.youtubeData && this.state.playlists) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(Nav, { view: "video", colorSchema: "#cc181e" }),
                    React.createElement(_VideoComponents2.default, { list: this.state.youtubeData })
                );
            } else {

                // returns loading screen until the results from the fetch are resolved
                return React.createElement(
                    "div",
                    null,
                    React.createElement(Nav, { view: "auth", colorSchema: "#ffffff" }),
                    React.createElement(_Auth2.default, { setTokens: this.handleAuth }),
                    React.createElement(_Tutorial2.default, null)
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

//import "./SongComponents.css";

var Loading = function (_React$Component) {
    _inherits(Loading, _React$Component);

    function Loading() {
        _classCallCheck(this, Loading);

        return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
    }

    _createClass(Loading, [{
        key: "render",
        value: function render() {
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
    }]);

    return Loading;
}(React.Component);

var TrackItem = function (_React$Component2) {
    _inherits(TrackItem, _React$Component2);

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
                null,
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

var Tracklist = function (_React$Component3) {
    _inherits(Tracklist, _React$Component3);

    function Tracklist(props) {
        _classCallCheck(this, Tracklist);

        var _this3 = _possibleConstructorReturn(this, (Tracklist.__proto__ || Object.getPrototypeOf(Tracklist)).call(this, props));

        _this3.state = {
            tracks: [],
            loading: false
        };

        _this3.componentWillMount = _this3.componentWillMount.bind(_this3);
        return _this3;
    }

    _createClass(Tracklist, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this4 = this;

            this.setState({ loading: true });
            fetch("http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com/playlist/" + this.props.user + "/" + this.props.id + "/" + localStorage.getItem("token")).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this4.setState({ loading: false });
                return _this4.setState({ tracks: data.tracks.items });
            });
        }
    }, {
        key: "render",
        value: function render() {

            if (this.state.loading) {
                return React.createElement(Loading, null);
            }

            var tracks = [];
            var data = this.state.tracks;
            data.map(function (track) {
                return tracks.push(React.createElement(TrackItem, { track: track, key: track.track.id }));
            });
            return React.createElement(
                "div",
                { className: "tracklist" },
                tracks
            );
        }
    }]);

    return Tracklist;
}(React.Component);

var SongComponents = function (_React$Component4) {
    _inherits(SongComponents, _React$Component4);

    function SongComponents(props) {
        _classCallCheck(this, SongComponents);

        var _this5 = _possibleConstructorReturn(this, (SongComponents.__proto__ || Object.getPrototypeOf(SongComponents)).call(this, props));

        _this5.state = {
            viewButton: false,
            submitButton: false,
            loading: false
        };

        _this5.handleClickView = _this5.handleClickView.bind(_this5);
        _this5.handleSubmit = _this5.handleSubmit.bind(_this5);
        return _this5;
    }

    _createClass(SongComponents, [{
        key: "handleClickView",
        value: function handleClickView(e) {
            console.log("view Button Clicked");
            if (this.state.viewButton) {
                this.setState({ viewButton: false });
            } else {
                this.setState({ viewButton: true });
            }
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            var _this6 = this;

            console.log("submit button clicked");
            console.log(this);

            this.setState({ loading: true });
            fetch("http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com/convert/" + localStorage.getItem("token"), {
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
                _this6.setState({ loading: false });
                return _this6.props.onListSubmit(response);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var viewButton = this.state.viewButton;
            var list = this.props.item;

            // checks if img of chosen size exist // 2nd part checks for bigger img if first not found
            var imgItem = list.images[1] ? list.images[1].url : list.images[0] ? list.images[0].url : "https://picsum.photos/300/?blur";

            if (this.state.loading) {
                return React.createElement(Loading, null);
            }

            if (viewButton) {
                return React.createElement(
                    "div",
                    { className: "songList" },
                    React.createElement(
                        "button",
                        { onClick: this.handleClickView },
                        "View"
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.handleSubmit },
                        "Submit"
                    ),
                    React.createElement(Tracklist, { id: list.id, user: list.owner.id, tokens: localStorage.getItem("token") })
                );
            } else {
                return React.createElement(
                    "div",
                    { className: "songBox box-shadow" },
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
                margin: "5px",
                backgroundColor: "#cc181e"
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
                    React.createElement(
                        "button",
                        { style: { float: "right", height: "100%", backgroundColor: "#cc181e" } },
                        "Set"
                    ),
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
                    { className: "videoList" },
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

        // gets the id of the first video of each object and sets it as the default video to watch
        _this8.props.list.map(function (item) {
            if (item.items[0]) {
                return _this8.state.videoIds.push(item.items[0].id.videoId);
            } else {
                // return this.state.videoIds.push(null)
            }
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
            console.log("Submitted");
        }
    }, {
        key: "handleSongChange",
        value: function handleSongChange(e) {
            // TODO
            // pass this down to the secondary results component
            // filter the videoids for the song mathcing and replace it with the new selected song
            //
            // click set song -> filter function finds current song id -> replaces with set song id
        }
    }, {
        key: "render",
        value: function render() {
            var _this9 = this;

            var videoPlaybackButton = this.state.videoPlaybackButton;
            console.log("Render");
            if (videoPlaybackButton) {
                return React.createElement(TestYT, { playlist: this.state.videoIds });
            } else {

                var videoItem = this.props.list;
                var list = [];
                var ID = [];
                videoItem.map(function (item) {
                    if (item.items[0]) {
                        ID.push(item.items[0].id.videoId);
                        return list.push(React.createElement(VideoResultConfig, { results: item, key: item.etag, onShow: _this9.handleShowSecondary }));
                    }
                });
                return React.createElement(
                    "div",
                    { style: { marginTop: "-30px", textAlign: "center", position: "relative" } },
                    React.createElement(
                        "button",
                        { onClick: this.handleSubmit, id: "playlistButton" },
                        "Go to Playlist"
                    ),
                    list
                );
            }
        }
    }]);

    return VideoComponent;
}(React.Component);

exports.default = VideoComponent;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var URL = "http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com";

var Auth = function (_React$Component) {
    _inherits(Auth, _React$Component);

    function Auth(props) {
        _classCallCheck(this, Auth);

        var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this, props));

        _this.state = {
            redirectUrl: ""
        };
        return _this;
    }

    _createClass(Auth, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            fetch("http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com/auth", {
                headers: {
                    "Accept": "application/json"
                }
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                return _this2.setState({ redirectUrl: data.url });
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this3 = this;

            if (!this.props.token) {
                fetch("http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com/api/tokens").then(function (response) {
                    return response.json();
                }).then(function () {
                    var data = window.location.hash.substring(1);
                    localStorage.setItem("token", data);
                    return _this3.props.setTokens(data);
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "auth" },
                React.createElement(
                    "a",
                    { href: this.state.redirectUrl },
                    React.createElement(
                        "button",
                        null,
                        "Go to Spotify Authentication"
                    )
                )
            );
        }
    }]);

    return Auth;
}(React.Component);

exports.default = Auth;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Step1 = function (_React$Component) {
    _inherits(Step1, _React$Component);

    function Step1() {
        _classCallCheck(this, Step1);

        return _possibleConstructorReturn(this, (Step1.__proto__ || Object.getPrototypeOf(Step1)).apply(this, arguments));
    }

    _createClass(Step1, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Give us permission from Spotify to view your playlists"
                )
            );
        }
    }]);

    return Step1;
}(React.Component);

var Step2 = function (_React$Component2) {
    _inherits(Step2, _React$Component2);

    function Step2() {
        _classCallCheck(this, Step2);

        return _possibleConstructorReturn(this, (Step2.__proto__ || Object.getPrototypeOf(Step2)).apply(this, arguments));
    }

    _createClass(Step2, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Look over your playlists and choose which one you'd like to see videos off and submit it"
                )
            );
        }
    }]);

    return Step2;
}(React.Component);

var Step3 = function (_React$Component3) {
    _inherits(Step3, _React$Component3);

    function Step3() {
        _classCallCheck(this, Step3);

        return _possibleConstructorReturn(this, (Step3.__proto__ || Object.getPrototypeOf(Step3)).apply(this, arguments));
    }

    _createClass(Step3, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Look over the results and decide if the videos display fit your choises"
                )
            );
        }
    }]);

    return Step3;
}(React.Component);

var Step4 = function (_React$Component4) {
    _inherits(Step4, _React$Component4);

    function Step4() {
        _classCallCheck(this, Step4);

        return _possibleConstructorReturn(this, (Step4.__proto__ || Object.getPrototypeOf(Step4)).apply(this, arguments));
    }

    _createClass(Step4, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Enjoy your brand new Youtube playlist"
                )
            );
        }
    }]);

    return Step4;
}(React.Component);

var HowItWorks = function (_React$Component5) {
    _inherits(HowItWorks, _React$Component5);

    function HowItWorks() {
        _classCallCheck(this, HowItWorks);

        return _possibleConstructorReturn(this, (HowItWorks.__proto__ || Object.getPrototypeOf(HowItWorks)).apply(this, arguments));
    }

    _createClass(HowItWorks, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "How it Works"
                ),
                React.createElement(
                    "div",
                    { style: { marginLeft: "10%" } },
                    React.createElement(Step1, null),
                    React.createElement(Step2, null),
                    React.createElement(Step3, null),
                    React.createElement(Step4, null)
                )
            );
        }
    }]);

    return HowItWorks;
}(React.Component);

exports.default = HowItWorks;

/***/ })
/******/ ]);