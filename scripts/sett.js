let gear = document.getElementsByClassName("settings-gear")[0];
let panel = document.getElementsByClassName("settings-panel")[0];
let colors = document.querySelectorAll(".colors_color");
let butt_light = document.getElementsByClassName("skin__light")[0];
let butt_dark = document.getElementsByClassName("skin__dark")[0];

//mostrar el panel de control
const show_settings = ()=>{
    gear.classList.toggle("settings-gear--show");
    panel.classList.toggle("settings-panel--show");
};

//Cambiar el color del logo
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

//Cambiar los colores de textos, botones, etc.. del menu
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

//Cambiar los colores de textos, botones, etc.. del home
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

//Cambiar los colores de textos, botones, etc.. de la seccion conocimientos
const set_skills_style = (color) =>{

    //titulo de la seccion
    let skills_tittle = document.getElementsByClassName("cont-tittle__tittle")[0];

    //marcadores de color
    let skills_marks = document.querySelectorAll(".skills__cont-name");

    //titulos de las tarjetas
    let skills_tit_card = document.querySelectorAll(".cont-text__tittle");

    //lineas divisorias
    let skills_lines = document.querySelectorAll(".cont-text__line");

    skills_tittle.classList.remove("cont-tittle__tittle--origin");
    skills_tittle.classList.remove("cont-tittle__tittle--second");
    skills_tittle.classList.remove("cont-tittle__tittle--third");
    skills_tittle.classList.remove("cont-tittle__tittle--fourth");

    skills_marks.forEach(mark =>{
        mark.classList.remove("skills__cont-name--origin");
        mark.classList.remove("skills__cont-name--second");
        mark.classList.remove("skills__cont-name--third");
        mark.classList.remove("skills__cont-name--fourth");
    });

    skills_tit_card.forEach(titc =>{
        titc.classList.remove("cont-text__tittle--origin");
        titc.classList.remove("cont-text__tittle--second");
        titc.classList.remove("cont-text__tittle--third");
        titc.classList.remove("cont-text__tittle--fourth");
    });

    skills_lines.forEach(line =>{
        line.classList.remove("cont-text__line--origin");
        line.classList.remove("cont-text__line--second");
        line.classList.remove("cont-text__line--third");
        line.classList.remove("cont-text__line--fourth");
    });

    if(color === "color1"){

        skills_tittle.classList.add("cont-tittle__tittle--origin");    
        skills_marks.forEach(mark =>{
            mark.classList.add("skills__cont-name--origin");
        });
        skills_tit_card.forEach(titc =>{
            titc.classList.add("cont-text__tittle--origin");
        });
        skills_lines.forEach(line =>{
            line.classList.add("cont-text__line--origin");
        });

    }else if(color === "color2"){

        skills_tittle.classList.add("cont-tittle__tittle--second");
        skills_marks.forEach(mark =>{
            mark.classList.add("skills__cont-name--second");
        });
        skills_tit_card.forEach(titc =>{
            titc.classList.add("cont-text__tittle--second");
        });
        skills_lines.forEach(line =>{
            line.classList.add("cont-text__line--second");
        });

    }else if(color === "color3"){

        skills_tittle.classList.add("cont-tittle__tittle--third");
        skills_marks.forEach(mark =>{
            mark.classList.add("skills__cont-name--third");
        });
        skills_tit_card.forEach(titc =>{
            titc.classList.add("cont-text__tittle--third");
        });
        skills_lines.forEach(line =>{
            line.classList.add("cont-text__line--third");
        });

    }else if(color === "color4"){

        skills_tittle.classList.add("cont-tittle__tittle--fourth");
        skills_marks.forEach(mark =>{
            mark.classList.add("skills__cont-name--fourth");
        });
        skills_tit_card.forEach(titc =>{
            titc.classList.add("cont-text__tittle--fourth");
        });
        skills_lines.forEach(line =>{
            line.classList.add("cont-text__line--fourth");
        });

    }

}

//Cambiar los colores de textos, botones, etc.. de la seccion portafolio
const set_portf_style = (color) =>{

    //titulo de la seccion
    let port_tittle = document.getElementsByClassName("cont-tittle__tittlep")[0];
    //botones
    let port_btns = document.querySelectorAll(".project__linktop");

    port_tittle.classList.remove("cont-tittle__tittlep--origin");
    port_tittle.classList.remove("cont-tittle__tittlep--second");
    port_tittle.classList.remove("cont-tittle__tittlep--third");
    port_tittle.classList.remove("cont-tittle__tittlep--fourth");

    port_btns.forEach(btn =>{
        btn.classList.remove("project__linktop--origin");
        btn.classList.remove("project__linktop--second");
        btn.classList.remove("project__linktop--third");
        btn.classList.remove("project__linktop--fourth");
    });

    if(color === "color1"){

        port_tittle.classList.add("cont-tittle__tittlep--origin");
        port_btns.forEach(btn =>{
            btn.classList.add("project__linktop--origin");
        });

    }else if(color === "color2"){

        port_tittle.classList.add("cont-tittle__tittlep--second");
        port_btns.forEach(btn =>{
            btn.classList.add("project__linktop--second");
        });

    }else if(color === "color3"){

        port_tittle.classList.add("cont-tittle__tittlep--third");
        port_btns.forEach(btn =>{
            btn.classList.add("project__linktop--third");
        });

    }else if(color === "color4"){

        port_tittle.classList.add("cont-tittle__tittlep--fourth");
        port_btns.forEach(btn =>{
            btn.classList.add("project__linktop--fourth");
        });

    }
}

//Cambiar los colores de textos, botones, etc.. de la seccion contacto
const set_cnt_style = (color) =>{

    //titulo de la seccion
    let cnt_tittle = document.getElementsByClassName("cont-tittle__tittlec")[0];

    cnt_tittle.classList.remove("cont-tittle__tittlec--origin");
    cnt_tittle.classList.remove("cont-tittle__tittlec--second");
    cnt_tittle.classList.remove("cont-tittle__tittlec--third");
    cnt_tittle.classList.remove("cont-tittle__tittlec--fourth");


    if(color === "color1"){

        cnt_tittle.classList.add("cont-tittle__tittlec--origin");

    }else if(color === "color2"){

        cnt_tittle.classList.add("cont-tittle__tittlec--second");

    }else if(color === "color3"){

        cnt_tittle.classList.add("cont-tittle__tittlec--third");

    }else if(color === "color4"){

        cnt_tittle.classList.add("cont-tittle__tittlec--fourth");

    }
}

//Cambiar los colores de textos, botones, etc.. en general
const set_style = (color) =>{
    if(color.id === "color1"){
        set_logo_style("color1");
        set_menu_style("color1");
        set_home_style("color1");
        set_skills_style("color1");
        set_portf_style("color1");
        set_cnt_style("color1");
    }else if(color.id === "color2"){
        set_logo_style("color2");
        set_menu_style("color2");
        set_home_style("color2");
        set_skills_style("color2");
        set_portf_style("color2");
        set_cnt_style("color2");
    }else if(color.id === "color3"){
        set_logo_style("color3");
        set_menu_style("color3");
        set_home_style("color3");
        set_skills_style("color3");
        set_portf_style("color3");
        set_cnt_style("color3");
    }else if(color.id === "color4"){
        set_logo_style("color4");
        set_menu_style("color4");
        set_home_style("color4");
        set_skills_style("color4");
        set_portf_style("color4");
        set_cnt_style("color4");
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

//Cambiar el tema de la pagina Dark/Light
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

////////Eventos que disparan las funciones

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