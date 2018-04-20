
function filter(filterBy) {
    display_none();
    display_element(filterBy);
    remove_class_border();
    add_class_border(document.getElementById(filterBy));
}
function display_all(){
    remove_class_border();
    add_class_border(document.getElementById("all_event"));
    var x = document.getElementsByClassName("event");
    for(var i= 0; i< x.length; i++){
        x[i].style.display = 'block';
    }
}
function display_none(){
	var x = document.getElementsByClassName("event");
	for(var i= 0; i< x.length; i++){
        //style = window.getComputedStyle(x[i]);
        //console.log(style.getPropertyValue('display'));
    	x[i].style.display = 'none';
    }
}
function display_element(filterBy){
    var x = document.getElementsByClassName(filterBy);
    for(var i= 0; i< x.length; i++){
        x[i].style.display = 'block';
    }
}
function remove_class_border(){
    var z = document.getElementsByClassName("event_sort_header");
    for(var i=0; i< z.length; i++){
        z[i].classList.remove("border");
    }
}
function add_class_border(x){
    x.classList.add("border");
}