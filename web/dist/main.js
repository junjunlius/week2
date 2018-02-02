webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(1);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var check = function () {
    function check() {
        _classCallCheck(this, check);

        this.all = document.getElementById('all');
        this.noAll = document.getElementById('noAll');
        this.fan = document.getElementById('fan');
        this.ha = document.getElementById('ha');
        this.inp = document.querySelectorAll('input');
        this.list = document.querySelector('.list');
        this.contant = document.querySelector('.contant');
        this.init();
    }

    _createClass(check, [{
        key: 'init',
        value: function init() {
            this.allCheck();
            this.noAllCheack();
            this.fanCheck();
            this.subCheck();
        }
        // 全选

    }, {
        key: 'allCheck',
        value: function allCheck() {
            var _this = this;

            var flag = false;
            this.all.onclick = function () {
                [].concat(_toConsumableArray(_this.inp)).map(function (item) {
                    if (!item.checked) {
                        item.checked = !flag;
                    }
                });
            };
        }
        // 全不选

    }, {
        key: 'noAllCheack',
        value: function noAllCheack() {
            var _this2 = this;

            var flag = false;
            this.noAll.onclick = function () {
                [].concat(_toConsumableArray(_this2.inp)).map(function (item) {
                    if (item.checked) {
                        item.checked = flag;
                        _this2.list.innerHTML = '';
                    }
                });
            };
        }
        // 反选

    }, {
        key: 'fanCheck',
        value: function fanCheck() {
            var _this3 = this;

            this.fan.onclick = function () {
                [].concat(_toConsumableArray(_this3.inp)).map(function (item) {
                    if (item.checked == true) {
                        item.checked = false;
                    } else {
                        item.checked = true;
                    }
                });
            };
        }
    }, {
        key: 'subCheck',
        value: function subCheck() {
            var _this4 = this;

            var span = document.getElementsByTagName('span');
            this.ha.onclick = function () {
                _this4.list.innerHTML = '';
                for (var i = 0; i < _this4.inp.length; i++) {
                    if (_this4.inp[i].checked) {
                        var li = document.createElement('li');
                        li.innerHTML = '' + span[i].innerText;
                        _this4.list.appendChild(li);
                        // this.contant.style.display = 'block'
                    }
                }
            };
        }
    }]);

    return check;
}();

new check();

/***/ })
],[0]);