(function () {

    var remote = require('electron').remote; 

    function init() { 
        document.getElementById("min-btn").addEventListener("click", function (e) {
            remote.BrowserWindow.getFocusedWindow().minimize();
        });

        document.getElementById("max-btn").addEventListener("click", function (e) {
            remote.BrowserWindow.getFocusedWindow().maximize();
        });

        document.getElementById("close-btn").addEventListener("click", function (e) {
            remote.BrowserWindow.getFocusedWindow().close();
        }); 
   }; 

   document.onreadystatechange = function () {
        if (document.readyState == "complete") {
             init(); 
        }
   };

})();

