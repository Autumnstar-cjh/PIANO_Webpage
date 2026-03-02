const reveals = document.querySelectorAll('.reveal');

const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.08 });
reveals.forEach(r => io.observe(r));

function copyCitation(btn) {
    navigator.clipboard.writeText(document.getElementById('cite-text').textContent).then(() => {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
    });
}