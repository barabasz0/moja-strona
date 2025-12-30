document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.smooth-link').forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            const href = this.getAttribute('href');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location = href;
            }, 500);
        });
    });
});
