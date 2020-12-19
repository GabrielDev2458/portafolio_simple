let menu = document.getElementsByClassName("menu")[0];
let menu_control = document.getElementsByClassName("menu-control")[0];
let links = document.querySelectorAll(".link__text");
let home = document.getElementsByClassName("home")[0];
let skills = document.getElementsByClassName("skills")[0];
let portfolio = document.getElementsByClassName("portfolio")[0];
let cnt = document.getElementsByClassName("cnt")[0];
let cnt_btn = document.getElementsByClassName("action__btn-cnt")[0];
let port_btn = document.getElementsByClassName("action__btn-port")[0];

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

const show_menu = (trigger) =>{
    console.log("hola crack");
    if(trigger === "lines"){
        menu_control.classList.toggle("menu-control--active");
        menu.classList.toggle("menu--show");
        show_settings("lines");
    }else if (trigger === "gear"){
        menu_control.classList.remove("menu-control--active");
        menu.classList.remove("menu--show");
    }
}

links.forEach(link => {
    console.log();
    link.addEventListener("click",e =>{
        set_view(e.target.attributes.id.value);
    });
});

menu_control.addEventListener("click",e=>{
    show_menu("lines");
});

cnt_btn.addEventListener("click", e =>{
    set_view("cnt");
});

port_btn.addEventListener("click", e =>{
    set_view("port");
});