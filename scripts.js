function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        details.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(function(bar) {
        const progress = bar.getAttribute('data-progress');
        bar.querySelector('::before').style.width = progress + '%';
    });
});
