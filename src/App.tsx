import * as React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [fileLocation, setFileLocation] = React.useState<string>("");
  const inputEl = React.useRef<HTMLInputElement>(null);

  const sendToBackground = () => {
    //const elem = <HTMLInputElement>document.getElementById("textbox_id");
    //console.log(inputEl.current?.value);
    //chrome.runtime.sendMessage(inputEl.current?.value);
  };
  const wallpaperHandler = () => {
    chrome.runtime.sendMessage({ folderType: "wallpaper" });
  };

  const phoneHandler = () => {
    chrome.runtime.sendMessage({ folderType: "phone" });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={wallpaperHandler}>Wallpaper</button>
        <button onClick={phoneHandler}>For phone</button>
        {/* <form>
          <label>
            Name:
            <input
              ref={inputEl}
              className="submissionfield"
              type="text"
              name="name"
            />
          </label>
        </form> */}
      </header>
    </div>
  );
};

export default App;
