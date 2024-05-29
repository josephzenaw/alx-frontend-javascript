// 3-all.js

import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
        .then((results) => {
            const photo = results[0];
            const user = results[1];
            console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
        })
        .catch(() => {
            console.log('Signup system offline');
        });
}

export default handleProfileSignup;

