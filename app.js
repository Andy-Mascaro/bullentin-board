import { getPosts, getUser, logout } from './fetch-utils.js';
import { renderSheets } from './render-utils.js';

const bulletin = document.getElementById('bulletin-board');
const authButton = document.getElementById('authButton');
const createButton = document.getElementById('create');  

window.addEventListener('load', async () => {
    const user = await getUser();
    if (user) {
        authButton.addEventListener('click', logout);
        authButton.textContent = 'Logout';
    } else {
        authButton.addEventListener('click', () => {
            location.replace('/auth'); 
        });
        authButton.textContent = 'Login';
    }
    createButton.addEventListener('click', () => {
        location.replace('/create');
    });
    const posts = await getPosts();
    for (let post of posts) {
        const postDiv = renderSheets(post);
        bulletin.append(postDiv);
    }
});

// const board = document.getElementById('bulletin-board');
// const authButton = document.getElementById('authButton');
// const createButton = document.getElementById('create');

// window.addEventListener('load', async () => {
//     const user = getUser();

//     if (user) {
//         authButton.addEventListener('click', logout);
//         authButton.textContent = 'Logout';
//     } else {
//         authButton.addEventListener('click', () => {
//             location.replace('/posts');
//         });
//         authButton.textContent = 'Login';
//     }  
      
//     createButton.addEventListener('click', () => {
//         location.replace('/posts');
//     });

//     const posts = await getPosts();
//     for (let post of posts) {
//         const postDiv = renderSheets(post);
//         board.append(postDiv);
//     }
    

// });








// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
