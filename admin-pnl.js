const sidebar_navbar_items = document.querySelectorAll(".nav-item");
const sidebar_navbar = document.querySelector(".nav");
const task_list = document.querySelector(".tasks");




function sidebarNavbarItemActive(event) {
    event.preventDefault();
    const clickedEl = event.target.closest(".nav-item");

    if (!clickedEl.className.includes("nav-item-active")) {
        sidebar_navbar_items.forEach(item => {
            item.classList.remove("nav-item-active");
        });

        clickedEl.classList.add("nav-item-active");
    }
}

const checkTasks = (event) => {
    const clickedEl = event.target;

    if (clickedEl.className.includes("form-check-input")) {
        const selected_task = clickedEl.closest(".bg-white");
        if (clickedEl.checked) {
            selected_task.style.borderRight = "5px solid rgba(60 , 255 , 60)";
        }
        else {
            selected_task.style.borderRight = "5px solid red";
        }
    }

}


sidebar_navbar.addEventListener("click", sidebarNavbarItemActive);
task_list.addEventListener("click", checkTasks);