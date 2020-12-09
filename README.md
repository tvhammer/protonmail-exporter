# Summary

Funny little web automation app to archive and download your mails in protonmail.
The application uses the protonmail web interface to do it's action.
It goes through all mails (starting with the oldest one) and downloads them as .eml file.
If the mail is downloaded it moves it to the `Archive` folder.

# Install

* Install Node
* `npm i --save-dev @wdio/cli`
* Configure the following environment variables: 
* * PROTONMAIL_USER
* * PROTONMAIL_PASSWORD
* * PROTONMAIL_DECRYPT_PASSWORD

If you have a single password for the login and the decryption, then the code might need some tweaking...

# Run

`npx wdio wdio.conf.js`