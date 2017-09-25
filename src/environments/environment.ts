  // The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCQfH5WDyoBlxFZ9Kp7FdXG-KJX7Qj-c-U',
    authDomain: 'fir-8d8ad.firebaseapp.com',
    databaseURL: 'https://fir-8d8ad.firebaseio.com',
    projectId: 'fir-8d8ad',
    storageBucket: 'fir-8d8ad.appspot.com',
    messagingSenderId: '733966203244'
  }
};
