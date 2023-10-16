const filterButtons=document.querySelectorAll(".filter-btn button");
const filtercard=document.querySelectorAll(".filterable-card .card");

const filtercards=e=>{
    document.querySelector(".active").classList.remove("active");

    e.target.classList.add("active");
    filtercard.forEach(card => {
        card.classList.add("hide")
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name ==="all")
        card.classList.remove("hide")

    }) ;
};

filterButtons.forEach(button=>button.addEventListener("click",filtercards))