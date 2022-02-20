import { logout, checkAuth, createPost } from '../fetch-utils.js';

// checkAuth();
const listForm = document.getElementById ('post-form'); 


listForm.addEventListener = ('submit', async (e) =>{
    e.preventDefault();
    const dataForm = new FormData (listForm);
    const titleEl = dataForm.get('title');
    const descriptionEl = dataForm.get('description');
    const contactEl = dataForm.get('contact');
    await createPost(titleEl, descriptionEl, contactEl);

});

const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener ('click', () => {
    logout();
});