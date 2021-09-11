// This file is injected as a content script
console.log("Hello from content script!")

// function handleChanged(delta : any) {
//     console.log("downloading")
//     if (delta.state && delta.state.current === "complete") {
//        alert(`Download ${delta.id} has completed.`);
//     }
//   }
  
// chrome.downloads.onChanged.addListener(handleChanged);
console.log("hi")

// var s = document.createElement('script');
// s.src = chrome.extension.getURL('script.js');
// document.head.appendChild(s);
// s.onload = function() {
//     s.remove();
// };

// // Event listener
// document.addEventListener('RW759_connectExtension', function(e) {
//     // e.detail contains the transferred data (can be anything, ranging
//     // from JavaScript objects to strings).
//     // Do something, for example:
//     console.log(e);
// });