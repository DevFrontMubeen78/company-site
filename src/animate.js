// onload page 

  

// onscroll ----------------------------------------------------------------------
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.scroll-animate');

    elements.forEach(element => {
        const position = element.getBoundingClientRect();

        // Check if the element is in view
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});

//   let to right  ----------------------------------------------------------------------

window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.slide-in-left');

    elements.forEach(element => {
        const position = element.getBoundingClientRect();

        // Check if the element is in view
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});

//   right to left ----------------------------------------------------------------------

window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.slide-in-right');

    elements.forEach(element => {
        const position = element.getBoundingClientRect();

        // Check if the element is in view
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});
