// Variable definitions for containers holding information that will be displayed to the user

var initial = document.getElementById("currentDisplay");

var garbage_goat = document.getElementById("garbage_goat");
var pavilion = document.getElementById("pavilion");
var north_clocktower = document.getElementById("north_clocktower");
var bloomsday = document.getElementById("bloomsday");
var city_blocks = document.getElementById("city_blocks");
var hiking_trails = document.getElementById("hiking_trails");
var spokane_river = document.getElementById("spokane_river");
var lilacs = document.getElementById("lilacs");
var title_1_schools = document.getElementById("title_1_schools");
var manito_park = document.getElementById("manito_park");
var doyles_ice_cream = document.getElementById("doyles_ice_cream");
var garland_theater = document.getElementById("garland_theater");
var green_bluff = document.getElementById("green_bluff");
var st_johns_cathedral = document.getElementById("st_johns_cathedral");
var whitorth_volunteer = document.getElementById("whitorth_volunteer");


// button definitions and event listeners

var button1 = document.getElementById("Button1")
button1.addEventListener('click', display, false);

var button2 = document.getElementById("Button2")
button2.addEventListener('click', display, false);

var button3 = document.getElementById("Button3")
button3.addEventListener('click', display, false);

var button4 = document.getElementById("Button4")
button4.addEventListener('click', display, false);

var button5 = document.getElementById("Button5")
button5.addEventListener('click', display, false);

var button6 = document.getElementById("Button6")
button6.addEventListener('click', display, false);

var button7 = document.getElementById("Button7")
button7.addEventListener('click', display, false);

var button8 = document.getElementById("Button8")
button8.addEventListener('click', display, false);

var button9 = document.getElementById("Button9")
button9.addEventListener('click', display, false);

var button10 = document.getElementById("Button10")
button10.addEventListener('click', display, false);

var button11 = document.getElementById("Button11")
button11.addEventListener('click', display, false);

var button12 = document.getElementById("Button12")
button12.addEventListener('click', display, false);

var button13 = document.getElementById("Button13")
button13.addEventListener('click', display, false);

var button14 = document.getElementById("Button14")
button14.addEventListener('click', display, false);

var button15 = document.getElementById("Button15")
button15.addEventListener('click', display, false);


// This function displays the chosen content to the user and hides the previously shown content
function display(variable){
    var temp1 = document.getElementsByClassName("shown"); // all elements with the class of shown 
    var temp2 = document.getElementsByClassName("element"); // all elements with the class of element

    // ensures that nothing breaks if user clicks the same button multiple times
    if(variable.currentTarget !== temp1){
        // adds hidden class to all information
        for(let i = 0; i < temp2.length; i++){
            temp2[i].classList.add("hidden");
        }

        // removes the shown class from any shown information
        for(let i = 0; i < temp1.length; i++){
            temp1[i].classList.remove("shown");
        }

        // displays the correct information via class adding and removing depending on which button is pressed
        switch(variable.currentTarget){
            case button1:
                garbage_goat.classList.remove("hidden");
                garbage_goat.classList.add("shown");
                break;
            case button2:
                pavilion.classList.remove("hidden");
                pavilion.classList.add("shown");
                break;
            case button3:
                north_clocktower.classList.remove("hidden");
                north_clocktower.classList.add("shown");
                break;
            case button4:
                bloomsday.classList.remove("hidden");
                bloomsday.classList.add("shown");
                break;
            case button5:
                city_blocks.classList.remove("hidden");
                city_blocks.classList.add("shown");
                break;
            case button6:
                hiking_trails.classList.remove("hidden");
                hiking_trails.classList.add("shown");
                break;
            case button7:
                spokane_river.classList.remove("hidden");
                spokane_river.classList.add("shown");
                break;
            case button8:
                lilacs.classList.remove("hidden");
                lilacs.classList.add("shown");
                break;
            case button9:
                title_1_schools.classList.remove("hidden");
                title_1_schools.classList.add("shown");
                break;
            case button10:
                manito_park.classList.remove("hidden");
                manito_park.classList.add("shown");
                break;
            case button11:
                doyles_ice_cream.classList.remove("hidden");
                doyles_ice_cream.classList.add("shown");
                break;
            case button12:
                garland_theater.classList.remove("hidden");
                garland_theater.classList.add("shown");
                break;
            case button13:
                green_bluff.classList.remove("hidden");
                green_bluff.classList.add("shown");
                break;
            case button14:
                st_johns_cathedral.classList.remove("hidden");
                st_johns_cathedral.classList.add("shown");
                break;
            case button15:
                whitorth_volunteer.classList.remove("hidden");
                whitorth_volunteer.classList.add("shown");
                break;
            default: // only triggers if something goes wrong
                // console.log("such badness is to a happening here");
                break;
        }
    }

}
