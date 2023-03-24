let header_color = document.querySelector("header")
window.addEventListener("scroll", () => {
    if (this.scrollY > 20) {
        header_color.classList.add("sticky")
    } else {
        header_color.classList.remove("sticky")
    }
})