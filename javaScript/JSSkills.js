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

//when screen reaches end of the sections

$(window).scroll(function(e){
    navBar.classList.add("scroll");
    left_div.classList.add("scroll");

    if ($window.scrollTop() >= skill_distance && skill_scroll){
        experienceh.click();
        string1 = "EXPERIENCE..."
        orig_text1 = string1.split(""); 
        next = false;
        typing_text.innerHTML = "";//clear text on HTML
        animate1();
        skill_scroll = false;
    }

    if ($window.scrollTop() >= exp_distance && experience_scroll){
        designsh.click();
        string1 = "DIGITAL DESIGNS..."
        orig_text1 = string1.split("");
        next = false;
        typing_text.innerHTML = "";//clear text on HTML
        animate1();
        experience_scroll = false;
    }


});
