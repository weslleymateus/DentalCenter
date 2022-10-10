(function ($,window){

"use strict";

const AppHtml = {

}

const Request = {

}

const App = {
   init: function(){
        Events.init();
   },
   scrollChangeColor: function(){
        if($(window).scrollTop() <= 1) {
            $("header").removeClass("fixo");
        } else if($(window).scrollTop() >= 1) {
            $("header").addClass("fixo");
        }
   },
   scrollMenu: function (href,posicao) {
    console.log(href,posicao)
        switch (href) {
            case "#about":
                $("html,body").animate({
                    scrollTop: posicao - $("#top").outerHeight()
                },1000)
                break;
            case "#talentos":
                $("html,body").animate({
                    scrollTop: posicao - $("#top").outerHeight() 
                },1000)
                break;
            case "#contact":
                $("html,body").animate({
                    scrollTop: posicao - $("#top").outerHeight()
                },1000)
                break;
            default:
                $("html,body").animate({
                    scrollTop: posicao - $("#top").outerHeight()
                },1000)
            
        }
   }
}

const Events = {
    init: function(){
        try {
            $(window).on("scroll", function() {
                App.scrollChangeColor();
            })
          $(".bars").on("click",function(){
                const container_menu = $(".container_menu");
                container_menu.toggleClass("active");
                const font = $(".font_menu");
                if(!$(font).hasClass("active")) {
                    $(font).addClass("active");
                    $(font).html('<i class="fa fa-times"></i>')
                } else if($(font).hasClass("active")) {
                    $(font).removeClass("active");
                    $(font).html('<i class="fa fa-bars"></i>');
                }
           })
           $("a.link_nav[href^='#']").on("click",function(e) {
                 e.preventDefault();
                let this_ = this; // recuperando alemento que foi clicado
                let  href = $(this_).attr("href");
                let posicao = $(href).offset().top;
                App.scrollMenu(href,posicao);
           })
        } catch(erro){
            console.log(erro)
        }
    }
 }
 $(document).ready(function(){
    App.init();
 })

})(jQuery, window)