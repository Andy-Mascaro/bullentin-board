import { getPosts, } from './fetch-utils.js';
import { renderSheets } from './render-utils.js';

const bulletin = document.getElementById('bulletin-board');





window.addEventListener('load', async () => {
    const posts = await getPosts();

    for (let post of posts){
        const postData = renderSheets(post);
        bulletin.append(postData);
    }
});



// authButton.addEventListener('click', () =>{
//     location.replace('./auth');
// });


// createButton.addEventListener('click', () =>{
//     location.replace('./posts');
  

// });

// authButton.addEventListener('click', async (e) => {
//     e.preventDefault();
//     const user = await getUser();
//     if (!user){
//         redirectIfLoggedIn();
//     } else {
//         console.error(user);
//     }

// });

// createButton.addEventListener('click', async (e) => {
//     e.preventDefault();
//     const user = await logout ();
//     if (!user){
//         redirectIfLoggedIn();
//     } else {
//         console.error(user);
//     }

// });

// window.addEventListener('load', async () => {
//     const user = await getUser();
//     if (user) {
//         authButton.addEventListener('click', logout);
//         authButton.textContent = 'Logout';
//     } else {
//         authButton.addEventListener('click', () => {
//             location.replace('./auth'); 
//         });
//         authButton.textContent = 'Login';
//     }
//     createButton.addEventListener('click', () => {
//         location.replace('./posts');
//     });
//     const posts = await getPosts();
//     for (let post of posts) {
//         const postDiv = renderSheets(post);
//         bulletin.append(postDiv);
//     }
// });

