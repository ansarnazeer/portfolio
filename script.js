const icons = document.querySelectorAll(".toggle-icon");

icons.forEach((icon) => {
    const skillsList = icon.parentElement.nextElementSibling;

    skillsList.style.display = "none";

    icon.addEventListener('click', () => {
        if (skillsList.style.display === "block") {
            skillsList.style.display = "none";
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
        } else {
            skillsList.style.display = "block";
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
        }
    })
});