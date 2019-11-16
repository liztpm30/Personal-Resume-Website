
var name_heading = document.getElementById("name");
var nav_list = document.querySelectorAll("#mainNavBar a");
var icons  = document.querySelectorAll(".icon");
var typing_text_first = document.querySelector("#first_text");
var typing_text_sec = document.querySelector("#getInTouch");


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

//Adding events to the media icons 
for(var i=0; i<icons.length; i++){
    icons[i].addEventListener("mouseover", function(){
        this.classList.add("icon_hover");
    });

    icons[i].addEventListener("mouseout", function(){
        this.classList.remove("icon_hover");
    });

    //Missing when Click!!!!!!!!!!!!!!!!!
}

//Typing text animation

var string1 = typing_text_first.innerHTML
var orig_text1 = string1.split("");

var string2 = typing_text_sec.innerHTML
var orig_text2 = string2.split("");  

var next = false;

typing_text_first.innerHTML = "";//clear text on HTML
typing_text_sec.innerHTML = "";

function animate1() {
    if(orig_text1.length > 0){
        typing_text_first.innerHTML += orig_text1.shift()
    }else{
        clearTimeout(running);
        animate2(); //calling next animation
    } 
    var running = setTimeout(animate1, 50);
};

animate1();

function animate2() {
    if(orig_text2.length > 0){
        typing_text_sec.innerHTML += orig_text2.shift()
    }else{
        clearTimeout(running); 
    }
    var running = setTimeout(animate2, 200);
}

//Adding events for the contact section
typing_text_sec.addEventListener("click", function(){
    string2 = "Email: lpied013@fiu.edu";
    orig_text2 = string2.split("");
    this.innerHTML = "";//clear text on HTML
    animate2();
});



