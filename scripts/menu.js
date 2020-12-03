let links = document.querySelectorAll(".link__text");
let home = document.getElementsByClassName("home")[0];
let skills = document.getElementsByClassName("skills")[0];
let portfolio = document.getElementsByClassName("portfolio")[0];
let cnt = document.getElementsByClassName("cnt")[0];

const set_home_view = ()=> {

    home.classList.add("home--show");
    skills.classList.remove("skills--show");
    portfolio.classList.remove("portfolio--show");
    cnt.classList.remove("cnt--show");

}

const set_skills_view = ()=> {
    home.classList.remove("home--show");
    skills.classList.add("skills--show");
    portfolio.classList.remove("portfolio--show");
    cnt.classList.remove("cnt--show");
}

const set_port_view = ()=> {
    home.classList.remove("home--show");
    skills.classList.remove("skills--show");
    portfolio.classList.add("portfolio--show");
    cnt.classList.remove("cnt--show");
}

const set_cont_view = ()=> {
    home.classList.remove("home--show");
    skills.classList.remove("skills--show");
    portfolio.classList.remove("portfolio--show");
    cnt.classList.add("cnt--show");
} 

const set_view = (view)=> {
    if(view === "home"){
        set_home_view();
    }else if(view === "skill"){
        set_skills_view();
    }else if(view === "port"){
        set_port_view();
    }else if(view === "cnt"){
        set_cont_view();
    }
};

links.forEach(link => {
    console.log();
    link.addEventListener("click",e =>{
        set_view(e.target.attributes.id.value);
    });
});