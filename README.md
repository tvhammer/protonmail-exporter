# Summary

Funny little web automation app to archive and download your mails in protonmail.
The application uses the protonmail web interface to do it's action.
It goes through all mails (starting with the oldest one) and downloads them as .eml file.
If the mail is downloaded it moves it to the `Archive` folder.

# Install

* Install NodeJs
* `npm i --save-dev @wdio/cli`

If you have a single password for the login and the decryption, then the code might need some tweaking...

# Run

* `export PROTONMAIL_USER=<your username>` (or `SET` on windows)
* `export PROTONMAIL_PASSWORD=<your password>` (or `SET` on windows)
* `export PROTONMAIL_DECRYPT_PASSWORD=<your decrypt password>`  (This is optional)
* `npx wdio wdio.conf.js`