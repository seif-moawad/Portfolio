var options = {
    strings: ['Seif Moawad\'s'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    backDelay: 5000  // wait for 5s before typing again
};

var typed = new Typed('#typed', options);


const popupBox = document.getElementById('popup-box');
const popupContent = document.getElementById('popup-content');
const popupParagraph = document.getElementById('popup-paragraph');
const continueReadingButtons = document.querySelectorAll('.btn-continue-reading');
const closePopupButton = document.querySelector('.btn-close-popup');

function openPopup(paragraph) {
    popupParagraph.textContent = paragraph;
    popupBox.style.display = 'block';
}

function closePopup() {
    popupBox.style.display = 'none';
}

continueReadingButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const paragraph = this.previousElementSibling.textContent;
        openPopup(paragraph);
    });
});

document.addEventListener('DOMContentLoaded', function() {
        const continueReadingLinks = document.querySelectorAll('.btn-continue-reading');
        const popupParagraph = document.querySelector('#popup-paragraph');
        const popupBox = document.querySelector('#popup-box');

        continueReadingLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const fullParagraph = this.parentNode.querySelector('.full-paragraph p').textContent;
                popupParagraph.textContent = fullParagraph;
                popupBox.classList.add('show');
            });
        });

        const closePopupLink = document.querySelector('.btn-close-popup');
        closePopupLink.addEventListener('click', function(event) {
            event.preventDefault();
            popupParagraph.textContent = '';
            popupBox.classList.remove('show');
        });
    });

closePopupButton.addEventListener('click', closePopup);
