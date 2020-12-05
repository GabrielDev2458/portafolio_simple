let gear = document.getElementsByClassName("settings-gear")[0];
let panel = document.getElementsByClassName("settings-panel")[0];
let colors = document.querySelectorAll(".colors_color");
let butt_light = document.getElementsByClassName("skin__light")[0];
let butt_dark = document.getElementsByClassName("skin__dark")[0];


const show_settings = ()=>{
    gear.classList.toggle("settings-gear--show");
    panel.classList.toggle("settings-panel--show");
};

const set_home_style = (color) =>{

    let home_position_resalt = document.getElementsByClassName("position-resalt")[0];
    let btn_action = document.getElementsByClassName("action__btn-cnt")[0];
    let btn_port = document.getElementsByClassName("action__btn-port")[0];

    if(color === "color1"){
        home_position_resalt.classList.add("position-resalt--origin");
        home_position_resalt.classList.remove("position-resalt--second");
        home_position_resalt.classList.remove("position-resalt--third");
        home_position_resalt.classList.remove("position-resalt--fourth");

        btn_action.classList.add("action__btn-cnt--origin");
        btn_action.classList.remove("action__btn-cnt--second");
        btn_action.classList.remove("action__btn-cnt--third");
        btn_action.classList.remove("action__btn-cnt--fourth");

        btn_port.classList.add("action__btn-port--origin");
        btn_port.classList.remove("action__btn-port--second");
        btn_port.classList.remove("action__btn-port--third");
        btn_port.classList.remove("action__btn-port--fourth");
    }else if(color === "color2"){
        home_position_resalt.classList.remove("position-resalt--origin");
        home_position_resalt.classList.add("position-resalt--second");
        home_position_resalt.classList.remove("position-resalt--third");
        home_position_resalt.classList.remove("position-resalt--fourth");

        btn_action.classList.remove("action__btn-cnt--origin");
        btn_action.classList.add("action__btn-cnt--second");
        btn_action.classList.remove("action__btn-cnt--third");
        btn_action.classList.remove("action__btn-cnt--fourth");

        btn_port.classList.remove("action__btn-port--origin");
        btn_port.classList.add("action__btn-port--second");
        btn_port.classList.remove("action__btn-port--third");
        btn_port.classList.remove("action__btn-port--fourth");
    }else if(color === "color3"){
        home_position_resalt.classList.remove("position-resalt--origin");
        home_position_resalt.classList.remove("position-resalt--second");
        home_position_resalt.classList.add("position-resalt--third");
        home_position_resalt.classList.remove("position-resalt--fourth");

        btn_action.classList.remove("action__btn-cnt--origin");
        btn_action.classList.remove("action__btn-cnt--second");
        btn_action.classList.add("action__btn-cnt--third");
        btn_action.classList.remove("action__btn-cnt--fourth");

        btn_port.classList.remove("action__btn-port--origin");
        btn_port.classList.remove("action__btn-port--second");
        btn_port.classList.add("action__btn-port--third");
        btn_port.classList.remove("action__btn-port--fourth");
    }else if(color === "color4"){
        home_position_resalt.classList.remove("position-resalt--origin");
        home_position_resalt.classList.remove("position-resalt--second");
        home_position_resalt.classList.remove("position-resalt--third");
        home_position_resalt.classList.add("position-resalt--fourth");

        btn_action.classList.remove("action__btn-cnt--origin");
        btn_action.classList.remove("action__btn-cnt--second");
        btn_action.classList.remove("action__btn-cnt--third");
        btn_action.classList.add("action__btn-cnt--fourth");

        btn_port.classList.remove("action__btn-port--origin");
        btn_port.classList.remove("action__btn-port--second");
        btn_port.classList.remove("action__btn-port--third");
        btn_port.classList.add("action__btn-port--fourth");
    }

}

const set_logo_style = (color) => {

    let logo = document.getElementsByClassName("cont-logo__logo")[0].children[0];

    if(color === "color1"){
        logo.classList.add("logo__resalt--origin");
        logo.classList.remove("logo__resalt--second");
        logo.classList.remove("logo__resalt--third");
        logo.classList.remove("logo__resalt--fourth");
    }else if(color === "color2"){
        logo.classList.remove("logo__resalt--origin");
        logo.classList.add("logo__resalt--second");
        logo.classList.remove("logo__resalt--third");
        logo.classList.remove("logo__resalt--fourth");
    }else if(color === "color3"){
        logo.classList.remove("logo__resalt--origin");
        logo.classList.remove("logo__resalt--second");
        logo.classList.add("logo__resalt--third");
        logo.classList.remove("logo__resalt--fourth");
    }else if(color === "color4"){
        logo.classList.remove("logo__resalt--origin");
        logo.classList.remove("logo__resalt--second");
        logo.classList.remove("logo__resalt--third");
        logo.classList.add("logo__resalt--fourth");
    }

};

const set_menu_style = (color) => {

    let links = document.querySelectorAll(".link__text");

    console.log(links);

    links.forEach(link => {
        link.classList.remove("link__text--origin");
        link.classList.remove("link__text--second");
        link.classList.remove("link__text--third");
        link.classList.remove("link__text--fourth");
    });

    if(color === "color1"){

        links.forEach(link => {
            link.classList.add("link__text--origin");
        });

    }else if(color === "color2"){

        links.forEach(link => {
            link.classList.add("link__text--second");
        });

    }else if(color === "color3"){

        links.forEach(link => {
            link.classList.add("link__text--third");
        });

    }else if(color === "color4"){

        links.forEach(link => {
            link.classList.add("link__text--fourth");
        });

    }

};

const set_style = (color) =>{
    if(color.id === "color1"){
        set_logo_style("color1");
        set_menu_style("color1");
        set_home_style("color1");
    }else if(color.id === "color2"){
        set_logo_style("color2");
        set_menu_style("color2");
        set_home_style("color2");
    }else if(color.id === "color3"){
        set_logo_style("color3");
        set_menu_style("color3");
        set_home_style("color3");
    }else if(color.id === "color4"){
        set_logo_style("color4");
        set_menu_style("color4");
        set_home_style("color4");
    }
}

const set_icon_color = (skin_color) =>{

    //Logo home
    let home_logo = document.getElementById("home-logo").children[0].children[0].children[0].attributes;
    //Logo skills
    let skills_logo = document.getElementById("skills-logo").children[0].children;
    //logo portfolio
    let portfolio_logo = document.getElementById("portfolio-logo").children[0].children;
    //logo contact
    let cnt_logo = document.getElementById("cnt-logo").children[0].children[0].children;

    console.log(cnt_logo);

    if(skin_color === "light"){
        home_logo.fill.value = "#000000";
        //head
        skills_logo[0].children[0].children[0].attributes.fill.value = "#000000";
        //engine
        skills_logo[1].children[0].children[0].attributes.fill.value = "#000000";
        //body
        skills_logo[2].children[0].children[0].attributes.fill.value = "#000000";
        //part1
        portfolio_logo[0].attributes.fill.value = "#000000";
        //part2
        portfolio_logo[1].attributes.fill.value = "#000000";
        //part3
        portfolio_logo[2].attributes.fill.value = "#000000";
        //part1
        cnt_logo[0].attributes.fill.value = "#000000";
        //part2
        cnt_logo[1].attributes.fill.value = "#000000";
    }else if(skin_color === "dark"){
        home_logo.fill.value = "#ffffff";
        //head
        skills_logo[0].children[0].children[0].attributes.fill.value = "#ffffff";
        //engine
        skills_logo[1].children[0].children[0].attributes.fill.value = "#ffffff";
        //body
        skills_logo[2].children[0].children[0].attributes.fill.value = "#ffffff";
        //part1
        portfolio_logo[0].attributes.fill.value = "#ffffff";
        //part2
        portfolio_logo[1].attributes.fill.value = "#ffffff";
        //part3
        portfolio_logo[2].attributes.fill.value = "#ffffff";
        //part1
        cnt_logo[0].attributes.fill.value = "#ffffff";
        //part2
        cnt_logo[1].attributes.fill.value = "#ffffff";
    }

}

const set_body = (skin_color) =>{
    let body = document.getElementsByTagName("body")[0];
    let menu = document.getElementsByClassName("menu")[0];
    let logo = document.getElementsByClassName("cont-logo__logo")[0];
    let links = document.querySelectorAll(".link__text");
    let home = document.getElementsByClassName("home")[0];
    let home_name = document.getElementsByClassName("cont-inf__name")[0];
    let home_position = document.getElementsByClassName("cont-inf__position")[0];

    if(skin_color === "light"){

        body.classList.remove("body--dark");
        body.classList.add("body--light");

        menu.classList.remove("menu--dark");
        menu.classList.add("menu--light");

        logo.classList.remove("cont-logo__logo--dark");
        logo.classList.add("cont-logo__logo--light");

        links.forEach(link => {
            link.classList.remove("link__text--dark");
        });

        links.forEach(link => {
            link.classList.add("link__text--light");
        });

        set_icon_color("light");

        home.classList.remove("home--dark");
        home.classList.add("home--light");

        home_name.classList.remove("cont-inf__name--dark");
        home_name.classList.add("cont-inf__name--light");

        home_position.classList.remove("cont-inf__position--dark");
        home_position.classList.add("cont-inf__position--light");

    }else if(skin_color === "dark"){

        body.classList.remove("body--light");
        body.classList.add("body--dark");

        menu.classList.remove("menu--light");
        menu.classList.add("menu--dark");

        logo.classList.remove("cont-logo__logo--light");
        logo.classList.add("cont-logo__logo--dark");

        links.forEach(link => {
            link.classList.remove("link__text--light");
        });

        links.forEach(link => {
            link.classList.add("link__text--dark");
        });

        set_icon_color("dark");

        home.classList.remove("home--light");
        home.classList.add("home--dark");

        home_name.classList.remove("cont-inf__name--light");
        home_name.classList.add("cont-inf__name--dark");

        home_position.classList.remove("cont-inf__position--light");
        home_position.classList.add("cont-inf__position--dark");

    }
}

gear.addEventListener("click", e => {
    show_settings();
});

butt_light.addEventListener("click", e => {
    set_body("light");
});

butt_dark.addEventListener("click", e => {
    set_body("dark");
});

colors.forEach(element => {
    element.addEventListener("click",e =>{
        set_style(e.target);
    });
});