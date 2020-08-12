// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
// importScripts('/__/firebase/7.17.2/firebase-app.js');
// importScripts('/__/firebase/7.17.2/firebase-messaging.js');
// importScripts('/__/firebase/init.js');

// const messaging = firebase.messaging();

 // [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js');

 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
 firebase.initializeApp({
  apiKey: "AIzaSyDOqqe9SjQDAK_rVnGAqXdYVNrB6BSup4Y",
  authDomain: "fcm-demo-15e50.firebaseapp.com",
  databaseURL: "https://fcm-demo-15e50.firebaseio.com",
  projectId: "fcm-demo-15e50",
  storageBucket: "fcm-demo-15e50.appspot.com",
  messagingSenderId: "1050846520560",
  appId: "1:1050846520560:web:9015f185842de35cbd8e35",
  measurementId: "G-K1PZD6D3FR"
});

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 // [END initialize_firebase_in_sw]



// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// [END background_handler]
