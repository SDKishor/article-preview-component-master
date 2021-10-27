const share_icon_el = document.getElementById("share_icon");
const profile_content_el = document.getElementById("profile_content");
const content_container_el = document.getElementById("content_container");



share_icon_el.addEventListener("click", () => {
    share_icon_el.classList.toggle("active");
    profile_content_el.classList.toggle("active");
    content_container_el.classList.toggle("active");
})