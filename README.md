# custom-download
A Google Chrome Extension that helps you organize your download files inside your default Download folder.

Used the awesome boilerplate from: https://react.christmas/2020/12

Navigate to the project directory and install the dependencies.

```
$ npm install
```

To build the extension

```
$ npm run build
```

After the project has been built, a directory named `dist` has been created. You have to add this directory to your Chrome browser:

1. Open Chrome.
2. Navigate to `chrome://extensions`.
3. Enable _Developer mode_.
4. Click _Load unpacked_.
5. Select the `dist` directory.

# Usage.

```
Once pressed on the extension, you will see two buttons:
1. Wallpaper
2. For phone
When pressed, the next download be downloaded to C:\Users\*User*\Downloads\wallpaper or \phone.
After downloading, the default download location will be set back to C:\Users\*User*\Downloads
```

