// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyD1mn9MR9hyZ36Ce1lnGyJYmL6AHopScTA",
    authDomain: "social-media-5e6c8.firebaseapp.com",
    databaseURL: "https://social-media-5e6c8-default-rtdb.firebaseio.com/",
    projectId: "social-media-5e6c8",
    storageBucket: "social-media-5e6c8.firebasestorage.app",
    messagingSenderId: "897473713729",
    appId: "1:897473713729:web:7ba552ed4c1be8754418c0"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ব্যাকগ্রাউন্ড নোটিফিকেশন রিসিভ করার পর প্যানেলে দেখানো
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
        tag: 'chat-msg', // একই ইউজারের মেসেজ গ্রুপ করবে
        renotify: true
    };
    
    return self.registration.showNotification(notificationTitle, notificationOptions);
});