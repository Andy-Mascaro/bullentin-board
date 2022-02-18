const SUPABASE_URL = 'https://nschbtdnjkjkoshunkhk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zY2hidGRuamtqa29zaHVua2hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MzYwMjAsImV4cCI6MTk2MDAxMjAyMH0.mwm25ysgqkbA7ZMQcYTguKcFC-qRnmiDHgK2PxCROPk';

const client = supabase.creatClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('/auth');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('/');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '/');
}


export async function getPosts() {
    const resp = await client.from('posts').select('*');
    return checkError(resp);
}

export async function createPost(post) {
    const resp = await client.from('posts').insert(post);
    return checkError(resp);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
