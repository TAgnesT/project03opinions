const reviews = [

    {
        name: "Peter Monroe",
        job: "PHP developer",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, minima quaerat! Tempora architecto aut debitis cum perferendis cupiditate, optio ut non at nostrum officia assumenda alias quibusdam, autem minima mollitia esse dolor similique! Nesciunt impedit officiis dicta, culpa deserunt commodi hic dolores atque alias temporibus est, delectus quas voluptate doloribus vitae quibusdam. Provident illum reiciendis autem, eos repudiandae quibusdam reprehenderit incidunt! Voluptatibus laborum eaque officia saepe delectus alias atque numquam, eligendi distinctio omnis quos cupiditate."
    },

    {
        name: "Jules Patric",
        job: "PHP developer",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, minima quaerat! Tempora architecto aut debitis cum perferendis cupiditate, optio ut non at nostrum officia assumenda alias quibusdam, autem minima mollitia esse dolor similique! Nesciunt impedit officiis dicta, culpa deserunt commodi hic dolores atque alias temporibus est, delectus quas voluptate doloribus vitae quibusdam. Provident illum reiciendis autem, eos repudiandae quibusdam reprehenderit incidunt! Voluptatibus laborum eaque officia saepe delectus alias atque numquam, eligendi distinctio omnis quos cupiditate."
    },

    {
        name: "Zac Moore",
        job: "PHP developer",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, minima quaerat! Tempora architecto aut debitis cum perferendis cupiditate, optio ut non at nostrum officia assumenda alias quibusdam, autem minima mollitia esse dolor similique! Nesciunt impedit officiis dicta, culpa deserunt commodi hic dolores atque alias temporibus est, delectus quas voluptate doloribus vitae quibusdam. Provident illum reiciendis autem, eos repudiandae quibusdam reprehenderit incidunt! Voluptatibus laborum eaque officia saepe delectus alias atque numquam, eligendi distinctio omnis quos cupiditate."
    }
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let current = 0;

window.addEventListener("load", ()=>{

    const item = reviews[current];
    img.src = item.img
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
})


function showPerson(person){

    const item = reviews[person];
    img.src = item.img
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

nextBtn.addEventListener("click", ()=>{

    current++;

    if(current > reviews.length -1){

        current = 0;
    }

    showPerson(current);
})

prevBtn.addEventListener("click", ()=>{

    current--;

    if(current < 0){

        current = reviews.length -1;
    }

    showPerson(current);
})



