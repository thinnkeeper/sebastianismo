function check_key(event){
    let key = event.key;
    if (key === "Enter") {
        let val = document.getElementById("input_field").value.toUpperCase();
        if (val === "HELP" || val === "H") {
            remove_bi();
            add_help();
            add_bi();
            remove_id("rep");
            remove_id("help");
        }
        else if(val === "ABOUT" || val === "ABT"){
            remove_bi();
            add_about();
            add_bi();
            remove_id("rep");
            remove_id("about");
        }
        else if(val === "ACADEMIC" || val === "ACD"){
            remove_bi();
            add_academic();
            add_bi();
            remove_id("rep");
            remove_id("academic");
        }
        else if(val === "CONTACTS" || val === "CTS"){
            remove_bi();
            add_contacts();
            add_bi();
            remove_id("rep");
            remove_id("contacts");
        }
        else if(val === "CLEAR" || val === "C"){
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
    let answer = '<span class="neon_green">Licenciatura em Informática e Multimédia</span>: 10/2024<br>Instituto Politécnico de Castelo Branco - Escola Superior de Tecnologia<br>http://www.ipcb.pt<br><span class="neon_green">Coursera Certificates</span>: 08/2021<br>Python for Everybody:<br>- Programming for Everybody (Getting Started with Python)<br>https://www.coursera.org/account/accomplishments/certificate/FJTRVLLP5DE2<br>- Python Data Structures<br>https://www.coursera.org/account/accomplishments/certificate/AXHGY65YLYXK<br>- Using Python to Access Web Data<br>https://www.coursera.org/account/accomplishments/certificate/2963C5CEBB6L<br>- Using Databases with Python<br>https://www.coursera.org/account/accomplishments/certificate/BA8D6942ULEB<br>- Capstone: Retrieving, Processing, and Visualizing Data with Python<br>https://www.coursera.org/account/accomplishments/certificate/Z6QJULXU295A<br>Django for Everybody:<br>- Web Application Technologies and Django<br>https://www.coursera.org/account/accomplishments/certificate/776CUELF8BZP<br><span class="neon_green">Nivél Secundário de Educação - Curso Científico-Humanístico de Artes Visuais</span>: 09/2010 - 07/2013<br>- Escola Secundária/3 de Amato Lusitano<br>http://aeal.edu.pt/<br>';
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

function add_contacts(){
    let box = document.querySelector(".box");
    let newElement = document.createElement("p");
    newElement.setAttribute("id", "contacts");
    box.appendChild(newElement);
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