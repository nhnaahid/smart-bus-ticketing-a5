function scrollToSection() {
    var targetSection = document.getElementById('buy-ticket');

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}