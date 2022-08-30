
const btn = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const article = document.querySelectorAll(".content");

about.addEventListener("click" ,(e) => {
    console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if(id){
        // remove active from other buttons
        btn.forEach((items) => {
            items.classList.remove("active");
            e.target.classList.add("active");
        });
        article.forEach((item) => {
            item.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});