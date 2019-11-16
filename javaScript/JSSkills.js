var typing_text = document.querySelector("#heading_text");
var navBar = document.querySelector("#mainNavBar");
var left_div = document.querySelector(".skill_left");
var skillh = document.querySelector("#skills_heading");
var experienceh = document.querySelector("#experience_heading");
var designsh = document.querySelector("#designs_heading");
var nav_list = document.querySelectorAll("#mainNavBar a");
var dot_list = document.querySelectorAll(".scroll_dot");
var $window = $(window);

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

    function reset_dots (){
        for(var i=0; i<dot_list.length; i++){
            dot_list[i].classList.remove("fas");
            dot_list[i].classList.add("far");
        };
    }
}


$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
  
$(window).on('resize scroll', function() {


    $(".sub_section").each(function() {
        var activeSection = $(this).attr('id');
        if ($(this).isInViewport()) {
            reset_nav_elements();
            $("#"+activeSection+"_heading").addClass("active");

                //Animated text transition when displayed section changes
                switch(activeSection){
                    case "skills":
                        typing_text.innerHTML = "TECHNICAL SKILLS";
                        reset_dots();
                        dot_list[0].classList.add("fas");
                        break;
                    case "experience":
                        typing_text.innerHTML = "EXPERIENCE";
                        reset_dots();
                        dot_list[1].classList.add("fas");
                        break;
                    case "designs":
                        typing_text.innerHTML = "DIGITAL DESIGNS";
                        reset_dots();
                        dot_list[2].classList.add("fas");
                        break;
                    case "resume":
                        typing_text.innerHTML = "RESUME";
                        reset_dots();
                        dot_list[3].classList.add("fas");
                            break;
                    default:
                        break;
            }

        } else{
            $("#"+activeSection+"_heading").removeClass("active"); 
        }
    });
});
