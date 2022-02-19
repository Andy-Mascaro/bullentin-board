import { redirectIfLoggedIn, signInUser, signupUser } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in-form');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up-form');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

redirectIfLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = await signupUser(signUpEmail.value, signUpPassword.value);

    if (user){
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }

});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = await signInUser(signInEmail.value, signInPassword.value);

    if (user){
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});
