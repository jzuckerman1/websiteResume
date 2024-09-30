

function initializeNameGradientEffect() {
    const nameElement = document.querySelector('.main__header__text h1');

    // Function to update the gradient based on mouse position relative to the element
    function nameColorGradientUpdate(event) {
        const windowWidth = window.innerWidth;

        const mouseX = event.clientX;
        const percentageX = (mouseX / windowWidth) * 100;

        const angle = (percentageX / 100) * 360; 

        // Update the background gradient of the name element
        nameElement.style.backgroundImage = `linear-gradient(${angle}deg, rgba(24,166,155,1) 0%, rgba(9,22,121,0.8190255220417634) 33%, rgba(176,0,255,1) 100%)`;
    }

    window.addEventListener('mousemove', nameColorGradientUpdate);
}

function initializePictureFlip() {
    const imageElement = document.querySelector('.header__section__container img');

    // Function to trigger the flip animation
    function triggerFlip() {
        imageElement.classList.add('flip');

        // Remove the flip class when the animation ends to ensure it finishes
        imageElement.addEventListener('animationend', () => {
            imageElement.classList.remove('flip');
        }, { once: true }); // { once: true } ensures the listener is removed after firing once
    }

    // Trigger the flip animation when the page loads
    window.addEventListener('load', () => {
        triggerFlip();
    });

    // Trigger the flip animation when the image is clicked
    imageElement.addEventListener('click', () => {
        triggerFlip();
    });
}

function initializeFadeInUp() {
    const animateElements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the fade-in-up class when the element is in view
                entry.target.classList.add('fade-in-up');
            } else {
                // Remove the animation class and reset styles when the element is out of view
                entry.target.classList.remove('fade-in-up');
                entry.target.style.opacity = '0'; // Reset opacity
            }
        });
    });

    // Observe each element
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

function initializeProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const projectRows = document.querySelectorAll('.project');
    const container = document.querySelector('.container');

    // Function to filter rows
    function filterProjects(filter) {
        let visibleRows = 0;

        projectRows.forEach(row => {
            if (filter === 'all' || row.classList.contains(filter)) {
                row.style.display = '';
                visibleRows++;
            } else {
                row.style.display = 'none';
            }
        });

        // Adjust the container height based on visible rows
        const rowHeight = getComputedStyle(document.querySelector('.projects__section .project')).height;
        const numericRowHeight = parseFloat(rowHeight); // Convert to number
        container.style.height = `${visibleRows * numericRowHeight}px`;
    }

    // Add event listeners to each button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

    // Initial load: Show all rows
    filterProjects('all');
}

document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById("hamburger__menu");
    // Hamburger Menu shifts page content over when opened
    checkbox.addEventListener("change", function() {
        document.body.style.marginLeft = checkbox.checked ? "300px" : "0";
    });

    initializeNameGradientEffect()
    initializePictureFlip()
    initializeFadeInUp()
    initializeProjectFilter()
});