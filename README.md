# Rigtools-v3

Rigtools
Extension/Devtools code execution

## How to use
```sh
$ git clone https://github.com/kkilobyte67/rigtools-v3 
$ cd rigtools
$ npm i
# Create a file named `server_config.json`
# Then paste in `{"updater_url":"localhost:8080"}` (Or whatever your websocket URL is)
$ npm start
```

- Then visit `devtools://devtools/bundled/devtools_app.html` in your browser
- Open a new tab and visit `devtools://devtools/bundled/devtools_app.html?experiments=true&ws=*websocket url*`
- Click on `Network`
- Then click on the gray box twice

## Terminology
- Entry
  - Entrypoint (or main script) when running devtools xss.
  - Payload
  - Script passed to extension to run code, such as disabling extensions.
- Chrome URLs
  - Elevated URLs that have extra access to features such as WebUI.
  - Only modify the entrypoint when necessary. If not modified properly, thigns such as the updater will break, do not remove any buttons and reuse ids.

## Release information
- Release 0.0.1
  - This release contains the following things:
    - Updater
    - Extension debugging
    - Devtools debugging
    - Chrome url debugging.
- Release 2.0.0
    - Added parts of the re-enrollment toolkit

## and if anything doesn't work Please feel free to contact me my via discord:

# https://discord.com/users/1475600405164593162
