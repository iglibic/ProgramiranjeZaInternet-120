const API_URL = 'https://jsonplaceholder.typicode.com/posts';

document.addEventListener('DOMContentLoaded', () => {
    loadCards();

    document
        .getElementById('add-new-card-button')
        .addEventListener('click', handleAddCardButtonClick);
});

async function loadCards() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('GET failed');

        const data = await response.json();

        data.slice(0, 6).forEach(post => {
            handleAddCard(post.title, post.body, post.id, post.userId);
        });
    } catch (error) {
        console.error(error);
    }
}

function toggleHeart(e) {
    e.currentTarget.classList.toggle('fa-heart');
    e.currentTarget.classList.toggle('fa-heart-o');
}

function toggleStars(e) {
    const stars = e.currentTarget.parentElement.children;
    let active = true;

    for (const star of stars) {
        if (active) {
            star.classList.replace('fa-star-o', 'fa-star');
        } else {
            star.classList.replace('fa-star', 'fa-star-o');
        }
        if (star === e.currentTarget) active = false;
    }
}

function addParagraph(e) {
    const text = prompt('Input text for a new paragraph');
    if (!text) return;

    const p = document.createElement('p');
    p.textContent = text;

    e.currentTarget
        .closest('.card')
        .querySelector('.paragraph-container')
        .appendChild(p);
}

async function deleteCard(e) {
    const card = e.currentTarget.closest('.card');
    const cardId = card.getAttribute('card-id');

    if (!confirm('Delete card?')) return;

   
    if (parseInt(cardId) <= 100) {
        try {
            const response = await fetch(`${API_URL}/${cardId}`, {
                method: 'DELETE'
            });

            if (!response.ok) throw new Error('DELETE failed');
        } catch (error) {
            console.error(error);
        }
    }

  
    card.remove();
}

async function editTitle(e) {
    const card = e.currentTarget.closest('.card');
    const cardId = card.getAttribute('card-id');
    const label = card.querySelector('.card-title-label');

    const newTitle = prompt('Edit title', label.textContent);
    if (!newTitle) return;

    if (parseInt(cardId) <= 100) {
        try {
            const response = await fetch(`${API_URL}/${cardId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: newTitle })
            });

            if (!response.ok) throw new Error('PUT failed');
        } catch (error) {
            console.error(error);
        }
    }


    label.textContent = newTitle;
}

async function handleAddCardButtonClick() {
    const title = prompt('Card title');
    if (!title) return;

    const description = prompt('Card description');
    if (!description) return;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body: description,
                userId: 1
            })
        });

        if (!response.ok) throw new Error('POST failed');

        const data = await response.json();
        handleAddCard(data.title, data.body, data.id, data.userId);
    } catch (error) {
        console.error(error);
        
        const tempId = Date.now();
        handleAddCard(title, description, tempId, 1);
    }
}

function handleAddCard(title, description, cardId, userId) {
    const template = document.getElementById('card-template');
    const node = document.importNode(template.content, true);
    const card = node.querySelector('.card');

    card.setAttribute('card-id', cardId);
    card.setAttribute('user-id', userId);

    card.querySelector('.card-title-label').textContent = title;

    const p = document.createElement('p');
    p.textContent = description;
    card.querySelector('.paragraph-container').appendChild(p);

    card.querySelector('.heart-icon').addEventListener('click', toggleHeart);
    card.querySelector('.x-icon').addEventListener('click', deleteCard);
    card.querySelector('.plus-icon').addEventListener('click', addParagraph);
    card.querySelector('.edit-icon').addEventListener('click', editTitle);
    card.querySelectorAll('.star-icon').forEach(star => star.addEventListener('click', toggleStars));

    document.getElementById('cards-container').appendChild(card);
}
