import React from 'react';
import firebase from 'firebase';

import { Paypal } from '../components'

const client = {
    sandbox: "Ae6pvn0FHsjGrnTJc-DArtT-74iVZCaLA5Io_CDVjB6R85CKVtT3K5yjJaf9LSstIulE791MxHkWj1G9",
    production: "fxxxx"
}

const env = process.env.NODE_ENV === "production" ? "production" : "sandbox"

const total = 100; 

const currency = "USD"

const onError = (error) => {
    console.log('erreur', error);
}

const onCancel = data => console.log('payment annulé', data);

const Payment = props => {
    const onSuccess = payment => {
        console.log('payment reussie');
        const user = firebase.auth().currentUser;
        const dbRef = firebase.database().ref(`users/${user.uid}`);
        const now = new Date();
        const newDate = now.setDate(now.getDate() + 30 );
        console.log('newDate', newDate);
        dbRef
            .set({validUntil: newDate})
                .then(()=> {
                    console.log('operation reuissie');
                    props.history.push({ patname: '/'})
                })
                .catch(e => {
                    console.log('error', e);
                })
    }    
    return (
        <Paypal 
            env={env}
            client={client}
            total={total}
            currency={currency}
            onError={onError}
            onCancel={onCancel}
            onSuccess={onSuccess}
        />
    )
}

export { Payment }