"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _electron = _interopRequireDefault(require("electron"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ElectronApp = /*#__PURE__*/function () {
  function ElectronApp() {
    _classCallCheck(this, ElectronApp);

    this.window = null;
  }

  _createClass(ElectronApp, [{
    key: "createWindow",
    value: function createWindow() {
      var _this2 = this;

      console.log('build window');
      this.window = new _electron["default"].BrowserWindow({
        width: 800,
        height: 600,
        frame: true
      }); // Si vous décommentez cette ligne, vous verrez la console de débug Chrome
      //window.webContents.openDevTools();
      // Display the homepage of the server

      this.window.loadURL('http://localhost:3000/'); // Lorsque la fenêtre est fermée, on l'indique au système

      this.window.on('closed', function () {
        _this2.window = null;
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      _electron["default"].app.on('ready', function () {
        return _this.createWindow();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      _electron["default"].app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') _electron["default"].app.quit();
      });
    }
  }, {
    key: "activate",
    value: function activate() {
      var _this3 = this;

      var _this = this;

      _electron["default"].app.on('activate', function () {
        if (_this3.window === null) _this.createWindow();
      });
    }
  }]);

  return ElectronApp;
}();

exports["default"] = ElectronApp;