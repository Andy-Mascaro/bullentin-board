export function renderSheets(post) {
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const h3 = document.createElement('h3');

    div.classList.add('post-it');
    p1.textContent = post.title;
    p2.textContent = post.description;
    h3.textContent = post.contact;
    

    p2.classList.add('contact');

    div.append(p1, p2, h3);

    return div;


}



