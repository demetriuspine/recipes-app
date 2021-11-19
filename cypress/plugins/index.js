// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const clipboardy = require('clipboardy');
module.exports = ( on ) => {
    on('task', {
        getClipboard () {
            return clipboardy.readSync();
        }
    });
<<<<<<< HEAD
    // on('before:browser:launch', (browser = {}, launchOptions) => {
    //     launchOptions.args.push('--disable-dev-shm-usage')
    //      return launchOptions
    // });
=======
>>>>>>> 8e00840a39e99448c9d7884e2d73b29813fb4cce
};
