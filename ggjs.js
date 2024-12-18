// Select the ghost button
const ghost = document.querySelector('.ghost_button');

// Function to calculate the document's dimensions
function getDocumentSize() {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    return {
        width: Math.max(
            htmlElement.clientWidth, 
            htmlElement.scrollWidth, htmlElement.offsetWidth,
            bodyElement.scrollWidth, bodyElement.offsetWidth
        ),
        height: Math.max(
            htmlElement.clientHeight,
            htmlElement.scrollHeight, htmlElement.offsetHeight,
            bodyElement.scrollHeight, bodyElement.offsetHeight
        )
    };
}

// Center the ghost on load
window.addEventListener('load', () => {         
    ghost.style.left = '50%';
    ghost.style.top = '50%';
});

// Move the ghost when the mouse hovers over it
ghost.addEventListener('mouseover', () => {
    const { width, height } = getDocumentSize();
    const ghostWidth = ghost.offsetWidth;
    const ghostHeight = ghost.offsetHeight;

    ghost.style.left = Math.floor(Math.random() * (width - ghostWidth)) + 'px';
    ghost.style.top = Math.floor(Math.random() * (height - ghostHeight)) + 'px';
});

// Handle click event to make the ghost "explode"
ghost.addEventListener('click', () => {
    // Add the explosion effect
    ghost.style.animation = 'explode 0.5s forwards';

    // Show success message after explosion
    setTimeout(() => {
        Swal.fire({
            title: "Kaboom! Você venceu!",
            width: 600,
            padding: "3em",
            color: "#fff",
            background: "#1a1a1a",
            backdrop: `
                rgba(0,0,0,0.8)
                url("https://i.redd.it/za055631yyy51.gif")
                left top
                no-repeat
            `
        });
    }, 500);

    // Reset ghost after the explosion
    setTimeout(() => {
        ghost.style.animation = '';
    }, 1000);
});
