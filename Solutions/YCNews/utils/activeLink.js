export default function setActiveLink() {
    const links = document.querySelectorAll(".header-link");

    links.forEach(link => {
        const linkPath = link.getAttribute("href");
        const currentPath = window.location.hash;
        if (linkPath === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    })
}