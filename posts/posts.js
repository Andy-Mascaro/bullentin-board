import { logout, checkAuth, createPosts } from '../fetch-utils.js';

checkAuth();
// const listForm = document.getElementById ('post-form'); 


// listForm.addEventListener = ('submit', async (e) =>{
//     e.preventDefault();
//     const dataForm = new FormData (listForm);
//     const title = dataForm.get('title');
//     const description = dataForm.get('description');
//     const contact = dataForm.get('contact');
//     await createPosts(title, description, contact);

// });

const listForm = document.getElementById('post-form');
listForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(listForm);
    await createPosts({
        title: data.get('title'),
        description: data.get('document'),
        contact: data.get('contact'),
        
    });
    location.replace('/');
});


const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener ('click', () => {
    logout();
});