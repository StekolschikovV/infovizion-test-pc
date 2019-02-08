(function () {

    var remote = require('electron').remote; 
    var electron = require('electron')
    var {app, BrowserWindow} = electron

    // const { remote } = require('electron')
   function init() { 
        document.getElementById("min-btn").addEventListener("click", function (e) {
            //  var window = BrowserWindow.getFocusedWindow();
            //  window.minimize(); 
            remote.BrowserWindow.getFocusedWindow().minimize();
            // console.log(remote)

        });

        document.getElementById("max-btn").addEventListener("click", function (e) {
            //  var window = BrowserWindow.getFocusedWindow(); 
            //  window.maximize(); 
            remote.BrowserWindow.getFocusedWindow().maximize();

        });

        document.getElementById("close-btn").addEventListener("click", function (e) {
            //  var window = BrowserWindow.getFocusedWindow();
            //  window.close();
            remote.BrowserWindow.getFocusedWindow().close();

        }); 
   }; 

   document.onreadystatechange = function () {
        if (document.readyState == "complete") {
             init(); 
        }
   };

})();

