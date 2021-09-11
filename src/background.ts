// This file is ran as a background script
console.log("Hello from background script!")
let fileLocation = "";
chrome.runtime.onMessage.addListener((request) => {
    console.log("Message received in background.js!", request);
    fileLocation = request.folderType;
    console.log(fileLocation);
  });
// let port = chrome.runtime.connectNative('custom_download');
// port.postMessage("Hello there");

// port.onMessage.addListener(function (message) {
//     console.log('Coming from background', message);
//   });
// port.onMessage.addListener(function(msg) {
//   console.log("Received " + msg);
// });
// port.onDisconnect.addListener(function() {
//   console.log("Disconnected");
// });
// port.postMessage({ text: "Hello, my_application" });


// function handleChanged(delta : any) {
//   console.log("downloading")
//   if (delta.state && delta.state.current === "complete") {
//      alert(`Download ${delta.id} has completed.`);
//   }
// }

// chrome.downloads.onChanged.addListener(handleChanged);
function handleDownload(downloadItem : any, suggest : any) {
  if(fileLocation === ""){
    suggest({filename: downloadItem.filename});
  }
  else{
    suggest({filename: fileLocation + "/" + downloadItem.filename});
  }
  fileLocation = "";
}

chrome.downloads.onDeterminingFilename.addListener(handleDownload);