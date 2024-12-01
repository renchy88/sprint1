
const links = document.querySelectorAll('.nav-link');
const textElement = document.getElementById('scroll-text');
const textOptions = [
    "Semper sollicitudin ut cursus nunc eu ultricies.",
    "Ut elit dui iaculis malesuada in auctor dui.",
    "Orci interdum pretium adipiscing augue."
];

links.forEach((link, index) => {
    link.addEventListener('mouseover', () => {
        textElement.textContent = textOptions[index];
    });
});


const feedbackContainer = document.querySelector('.feedback__list');
document.querySelectorAll('.feedback__card').forEach(card => {
    card.addEventListener('click', () => {
        feedbackContainer.appendChild(feedbackContainer.firstElementChild);
    });
});

document.querySelector('.feedback__button').addEventListener('click', () => {
    feedbackContainer.classList.toggle('structured');
});

document.querySelectorAll('.advantage').forEach(card => {
    card.addEventListener('mouseover', () => {
        const staticEmoji = card.querySelector('.static-emoji');
        const animatedEmoji = card.querySelector('.animated-emoji');
        staticEmoji.style.display = 'none';
        animatedEmoji.style.display = 'block';
    });

    card.addEventListener('mouseout', () => {
        const staticEmoji = card.querySelector('.static-emoji');
        const animatedEmoji = card.querySelector('.animated-emoji');
        staticEmoji.style.display = 'block';
        animatedEmoji.style.display = 'none';
    });
});
