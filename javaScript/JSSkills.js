var typing_text = document.querySelector("#heading_text");
var navBar = document.querySelector("#mainNavBar");
var left_div = document.querySelector(".skill_left");
var skillh = document.querySelector("#skills_heading");
var experienceh = document.querySelector("#experience_heading");
var designsh = document.querySelector("#designs_heading");
var nav_list = document.querySelectorAll("#mainNavBar a");
var $window = $(window);
var skill_distance = $('#skill_list').offset().top + $('#skill_list').outerHeight(true);
var exp_distance = $('#exp_list').offset().top + $('#exp_list').outerHeight(true);
var skill_scroll = true;
var experience_scroll = true;


var section_exp = false;

for(var i=0; i<nav_list.length; i++){
    nav_list[i].addEventListener("mouseover", function(){
        this.classList.add("mouse_over");
    });

    nav_list[i].addEventListener("mouseout", function(){
        this.classList.remove("mouse_over");
    });


    nav_list[i].addEventListener("click", function(){
        reset_nav_elements();
        this.classList.add("active");//adding active tab to class that was selected
    });

    function reset_nav_elements (){
        for(var i=0; i<nav_list.length; i++){
            nav_list[i].classList.remove("active");
        };
    }
}


//Typing text animation

var string1 = typing_text.innerHTML
var orig_text1 = string1.split("");
var next = false;

typing_text.innerHTML = "";//clear text on HTML

function animate1() {
    if(orig_text1.length > 0){
        typing_text.innerHTML += orig_text1.shift()
    }else{
        clearTimeout(running);
    } 
    var running = setTimeout(animate1, 100);
};

animate1();


$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
  
$(window).on('resize scroll', function() {

    navBar.classList.add("scroll");
    left_div.classList.add("scroll");

    $(".sub_section").each(function() {
        var activeSection = $(this).attr('id');
        if ($(this).isInViewport()) {
            reset_nav_elements();
            $("#"+activeSection+"_heading").addClass("active");
        } else{
            $("#"+activeSection+"_heading").removeClass("active"); 
        }
    });
});