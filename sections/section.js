class section {
    constructor() { }
    
    remove_blink_input(){
        const blink = document.getElementById("blink");
        const input_field = document.getElementById("input_field");
        add_replacement_input(input_field.value);
        blink.remove();
        input_field.remove();
    }
    
    add_blink_input(){
        let blink = ">";
        let box = document.querySelector(".box");
        let newBlink = document.createElement("span");
        newBlink.setAttribute("id", "blink");
        box.appendChild(newBlink);
        document.getElementById("blink").innerHTML = blink;
        let newInput = document.createElement("input");
        newInput.setAttribute("type", "text");
        newInput.setAttribute("id", "input_field");
        newInput.setAttribute("onkeydown", "check_key(event)");
        newInput.setAttribute("class", "all_unset");
        newInput.setAttribute("size", "50");
        box.appendChild(newInput);
        newInput.focus();
    }
    
    add_replacement_input(cmd){
        let rep = "#" + cmd;
        let box = document.querySelector(".box");
        let newElement = document.createElement("p");
        newElement.setAttribute("id", "rep");
        box.appendChild(newElement);
        document.getElementById("rep").innerHTML = rep;
    }
    
    remove_id(id){
        document.getElementById(id).removeAttribute("id");
    }
}