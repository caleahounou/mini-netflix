import {initializeApp} from 'firebase'

export const initFirebase = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyDVlbME39d48KCmoYp2yMW3ipL2y6CsxlE",
        authDomain: "mini-netflic.firebaseapp.com",
        databaseURL: "https://mini-netflic.firebaseio.com",
        projectId: "mini-netflic",
        storageBucket: "mini-netflic.appspot.com",
        messagingSenderId: "159127088928",
        appId: "1:159127088928:web:243cc2875e86c86625b145"
    };

    initializeApp(firebaseConfig);
}
