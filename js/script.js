document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('main input');

    // Placeholder typing animation
    const placeholders = [
        "Search for restaurants...",
        "Find your favorite cuisine...",
        "Try a new dish today..."
    ];

    let index = 0;
    let charIndex = 0;
    let currentText = placeholders[index];
    let typingInterval;

    function typePlaceholder() {
        if (charIndex <= currentText.length) {
            searchInput.setAttribute('placeholder', currentText.substring(0, charIndex) + '|');
            charIndex++;
        } else {
            clearInterval(typingInterval);
            setTimeout(() => {
                index = (index + 1) % placeholders.length;
                currentText = placeholders[index];
                charIndex = 0;
                typingInterval = setInterval(typePlaceholder, 100);
            }, 2000);
        }
    }

    typingInterval = setInterval(typePlaceholder, 100);

    // Input focus effect
    searchInput.addEventListener('focus', () => {
        searchInput.style.backgroundColor = "#fff";
        searchInput.style.color = "#000";
    });

    searchInput.addEventListener('blur', () => {
        searchInput.style.backgroundColor = "";
        searchInput.style.color = "";
    });
});
