function check_key(event){
    //tentativa de focar no input field apos load da página NAO FUNCIONA
    //document.getElementById("input_field").focus();
    let key = event.key;
    if (key === "Enter") {
        let val = document.getElementById("input_field").value;
        if (val === "help" || val === "h") {
            remove_bi();
            add_help();
            add_bi();
            remove_id("rep");
            remove_id("help");
        }
        else if(val === "about" || val === "abt"){
            remove_bi();
            add_about();
            add_bi();
            remove_id("rep");
            remove_id("about");
        }
        else if(val === "academic" || val === "acad"){
            remove_bi();
            add_academic();
            add_bi();
            remove_id("rep");
            remove_id("academic");
        }
        else if(val === "clear" || val === "c"){
            clear();
            add_bi();
        }
        else {
            remove_bi();
            add_bi();
            document.getElementById("rep").innerHTML += '&emsp;&emsp;&emsp;<span class="neon_purple"><-- Invalid command.</span>';
            remove_id("rep");
        }
    }
}

function create_help(){
    const answer = 'Available commands:<br><span class="neon_green">about</span>&emsp;&emsp;&emsp;&emsp;section about me<br><span class="neon_green">academic</span>&emsp;&emsp;&emsp;&emsp;section about my academic path<br><span class="neon_green">projects</span>&emsp;&emsp;&emsp;&emsp;section about my personal projects<br><span class="neon_green">contacts</span>&emsp;&emsp;&emsp;&emsp;section about my contacts<br><span class="neon_green">clear || c</span>&emsp;&emsp;&emsp;&emsp;clear console';
    return answer;
}

function add_help(){
    let box = document.querySelector(".box");
    let newElement = document.createElement("p");
    newElement.setAttribute("id", "help");
    box.appendChild(newElement);
    document.getElementById("help").innerHTML = create_help();
}

function create_about(){
    let answer = 'Hello, my name is <span class="neon_green">Sebastião Condeixa Sarreira Monteiro</span> I am a software/web developer from Portugal.<br>';
    answer += 'I study computer science at Escola Superior de Tecnologia do Instituto Politécnico de Castelo Branco.<br>';
    answer += 'As well as a programmer, I am also an avid reader and musician.<br>';
    return answer;
}

function add_about(){
    let box = document.querySelector(".box");
    let newElement = document.createElement("p");
    newElement.setAttribute("id", "about");
    box.appendChild(newElement);
    document.getElementById("about").innerHTML = create_about();
}

function create_academic(){
    let answer = '<span class="neon_green">Timeline:</span>(Present)<br>';
    answer += '|<br>';
    answer += '|<br>';
    answer += '- 9oct2024: Teste timeline dia de hoje.<br>';
    answer += '|<br>';
    answer += '|<br>';
    return answer;
}

function add_academic(){
    let box = document.querySelector(".box");
    let newElement = document.createElement("p");
    newElement.setAttribute("id", "academic");
    box.appendChild(newElement);
    document.getElementById("academic").innerHTML = create_academic();
    getSection("html/academic.html", "academic");
}

function remove_bi(){
    const blink = document.getElementById("blink");
    const input_field = document.getElementById("input_field");
    add_replacement_input(input_field.value);
    blink.remove();
    input_field.remove();
}

function add_bi(){
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

function add_replacement_input(cmd){
    let rep = "#" + cmd;
    let box = document.querySelector(".box");
    let newElement = document.createElement("p");
    newElement.setAttribute("id", "rep");
    box.appendChild(newElement);
    document.getElementById("rep").innerHTML = rep;
}

function remove_id(id){
    document.getElementById(id).removeAttribute("id");
}

function clear() {
    let box = document.querySelector(".box");
    box.innerHTML = '';
}

function getSection(path, section) {
    document.addEventListener('DOMContentLoaded', () => {
        fetch(path)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(section).innerHTML = data;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
}