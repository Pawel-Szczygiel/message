const { hash } = window.location;

const encodedMessage = atob(hash.replace('#', ''));

if (encodedMessage) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h3').innerText = encodedMessage;
}


document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const messageInput = document.querySelector('#message-input');
    const linkInput = document.querySelector('#link-input');

    const encrypted = btoa(messageInput.value);
    linkInput.value = `${window.location}#${encrypted}`;

    linkInput.select();
});