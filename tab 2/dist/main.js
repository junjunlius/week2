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
/***/ (function(module, exports) {

class Tab{
     constructor () {
          this.init();
     }
     init () {
        this.createDivs();
     }
     createDivs () {
         let box = document.createElement('div');
         let uli = this.createNav();
         let oli = this.createTab();
         box.className = 'box';

         
         box.append(uli);
         box.append(oli);
        
         document.body.append(box);
         this.main()
     }
     createNav () {
         let uli =document.createElement('ul');
         uli.className = 'uli';

         uli.id = 'nav';

         let lis1 = document.createElement('li');
         lis1.innerHTML = 1;
         uli.append(lis1);

         let lis2 = document.createElement('li');
         lis2.innerHTML = 2;
         uli.append(lis2);

         let lis3 = document.createElement('li');
         lis3.innerHTML = 3;
         uli.append(lis3);

         let lis4 = document.createElement('li');
         lis4.innerHTML = 4;
         uli.append(lis4);

         let lis5 = document.createElement('li');
         lis5.innerHTML = 5;
         uli.append(lis5);
         
         return uli;
       

     }
     createTab () {
        let oli =document.createElement('ol');
        oli.className = 'oli';
        oli.id = 'oli';

        let lis1 = document.createElement('li');
        lis1.innerHTML = 11111111;
        oli.append(lis1);

        let lis2 = document.createElement('li');
        lis2.innerHTML = 22222222;
        oli.append(lis2);

        let lis3 = document.createElement('li');
        lis3.innerHTML = 33333333;
        oli.append(lis3);

        let lis4 = document.createElement('li');
        lis4.innerHTML = 44444444;
        oli.append(lis4);

        let lis5 = document.createElement('li');
        lis5.innerHTML = 55555555;
        oli.append(lis5);
        
        return oli;

    }
    main () {
        let nav = document.querySelectorAll('.uli')[0];
         // console.log(nav);
        let ulis = nav.getElementsByTagName('li');

        let tablis = document.querySelectorAll('.oli')[0];
        // console.log(nav);
        let olis = tablis.getElementsByTagName('li');

        console.log(olis);
        for (let i=0;i<ulis.length;i++) {
               ulis[i].addEventListener('click', () => {
                   
                   for (let j=0;j<olis.length;j++) {
                        olis[j].style.display = 'none';
                        ulis[j].className = '';
                   }
                   olis[i].style.display = 'block';
                   ulis[i].className = 'bg';
                  
               })
        }
        
         
    }
}
new Tab();

/***/ })
/******/ ]);