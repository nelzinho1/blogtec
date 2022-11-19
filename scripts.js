/*Barra de navbar*/
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) { 
      $(".area-cabecalho").fadeOut('slow');
    } else {
      $(".area-cabecalho").fadeIn();
    }
  });
/*type*/

const el = document.querySelector(".typing-3 ");
const text = "Jogos, Dicas, e muito mais!";
const interval = 130;

function showText(el, text, interval) {

    const char = text.split("").reverse();
    
    const typer = setInterval(() => {

        if(!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();
        el.innerHTML += next;

    }, interval)


}
showText(el, text, interval);



/*type*/

     $().click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["", "Analista de suporte pleno| AWS | AZURE|", "Programador", "Freelancer"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
    var typed = new Typed(".typing-2", {
        strings:["", "Computadores", "Notebooks", "Celulares"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    }); 
    
    
/* esconder paragrafos */
    $(document).ready(function(){
        $("#hide").click(function(){
          $("p").hide();
        });
        $("#show").click(function(){
          $("p").show();
        });
      });
    
      $(document).ready(function(){
        $("#bt").click(function(){
          $("#div1").fadeIn(1000);
          $("#div2").fadeIn(1000);
          $("#div3").fadeIn(1000);
      });
      });
      
          $(document).ready(function(){
          $(".hide1").click(function(){
              $("#div3").hide(500);
              $("#div2").hide(500);
              $("#div1").hide(500);
            });
          });
          
         
          

    


