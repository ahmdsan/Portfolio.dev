const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Graphic-Designer', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1200,
    loop: true,
});

const type = new Typed('.scnd-multiple-text', {
    strings: ['a web developer who loves building clean and responsive websites', 'Nice to meet you !'],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1300,
    loop: true,
});

function openLinkInNewTab(button) {
        var linkUrl = button.getAttribute('data-link');
        
        window.open(linkUrl, "_blank");
    }