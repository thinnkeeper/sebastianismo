function check_key(event){
    let key = event.key;
    if (key === "Enter") {
        let val = document.getElementById("input_field").value.toUpperCase();
        if (val === "HELP" || val === "H") {
            remove_blink_input();
            add_help();
            add_blink_input();
            remove_id("rep");
            remove_id("help");
        }
        else if(val === "ABOUT" || val === "ABT"){
            remove_blink_input();
            add_about();
            add_blink_input();
            remove_id("rep");
            remove_id("about");
        }
        else if(val === "ACADEMIC" || val === "ACD"){
            remove_blink_input();
            add_academic();
            add_blink_input();
            remove_id("rep");
            remove_id("academic");
        }
        else if(val === "CONTACTS" || val === "CTS"){
            remove_blink_input();
            add_contacts();
            add_blink_input();
            remove_id("rep");
            remove_id("contacts");
        }
        else if(val === "CLEAR" || val === "C"){
            clear();
            add_blink_input();
        }
        else {
            remove_blink_input();
            add_blink_input();
            document.getElementById("rep").innerHTML += '&emsp;&emsp;&emsp;<span class="neon_purple"><-- Invalid command.</span>';
            remove_id("rep");
        }
    }
}

function add_help(){
    let box = document.querySelector(".box");
    let newElement = document.createElement("p");
    newElement.setAttribute("id", "help");
    box.appendChild(newElement);
    let create_help = 'Available commands:<br><span class="neon_green">about</span>&emsp;&emsp;&emsp;&emsp;section about me<br><span class="neon_green">academic</span>&emsp;&emsp;&emsp;&emsp;section about my academic path<br><span class="neon_green">projects</span>&emsp;&emsp;&emsp;&emsp;section about my personal projects<br><span class="neon_green">contacts</span>&emsp;&emsp;&emsp;&emsp;section about my contacts<br><span class="neon_green">clear || c</span>&emsp;&emsp;&emsp;&emsp;clear console';
    document.getElementById("help").innerHTML = create_help;
}

function add_about(){
    let box = document.querySelector(".box");
    let newElement = document.createElement("p");
    newElement.setAttribute("id", "about");
    box.appendChild(newElement);
    let create_about = 'Hello, my name is <span class="neon_green">Sebastião Condeixa Sarreira Monteiro</span> I am a software/web developer from Portugal.<br>';
    create_about += 'I study computer science at Escola Superior de Tecnologia do Instituto Politécnico de Castelo Branco.<br>';
    create_about += 'As well as a programmer, I am also an avid reader and musician.<br>';
    document.getElementById("about").innerHTML = create_about;
}

function add_academic(){
    let box = document.querySelector(".box");
    let newElement = document.createElement("p");
    newElement.setAttribute("id", "academic");
    box.appendChild(newElement);
    let create_academic = '<span class="neon_green">Licenciatura em Informática e Multimédia</span>: 10/2024<br>Instituto Politécnico de Castelo Branco - Escola Superior de Tecnologia<br>http://www.ipcb.pt<br><span class="neon_green">Coursera Certificates</span>: 08/2021<br>Python for Everybody:<br>- Programming for Everybody (Getting Started with Python)<br>https://www.coursera.org/account/accomplishments/certificate/FJTRVLLP5DE2<br>- Python Data Structures<br>https://www.coursera.org/account/accomplishments/certificate/AXHGY65YLYXK<br>- Using Python to Access Web Data<br>https://www.coursera.org/account/accomplishments/certificate/2963C5CEBB6L<br>- Using Databases with Python<br>https://www.coursera.org/account/accomplishments/certificate/BA8D6942ULEB<br>- Capstone: Retrieving, Processing, and Visualizing Data with Python<br>https://www.coursera.org/account/accomplishments/certificate/Z6QJULXU295A<br>Django for Everybody:<br>- Web Application Technologies and Django<br>https://www.coursera.org/account/accomplishments/certificate/776CUELF8BZP<br><span class="neon_green">Nivél Secundário de Educação - Curso Científico-Humanístico de Artes Visuais</span>: 09/2010 - 07/2013<br>- Escola Secundária/3 de Amato Lusitano<br>http://aeal.edu.pt/<br>';
    document.getElementById("academic").innerHTML = create_academic;
}

function add_projects(){
    let box = document.querySelector(".box");
    let newElement = document.createElement("p");
    newElement.setAttribute("id", "projects");
    let create_projects = '...<span class="neon_green">Under Construction</span>...<br>';
    document.getElementById("projects").innerHTML = create_projects;
    box.appendChild(newElement);
}

function add_contacts(){
    let box = document.querySelector(".box");
    let newElement = document.createElement("p");
    newElement.setAttribute("id", "contacts");
    let create_contacts = '<span class="neon_green">Email</span>: scsmonteiro.work@gmail.com<br>';
    create_contacts += '<span class="neon_green">LinkedIn</span>: <a href="www.linkedin.com/in/sebastião-monteiro-b37a0821a">sebastião-monteiro-b37a0821a</a>';
    create_contacts += '<span class="neon_green">GitHub</span>: <a href="https://github.com/thinnkeeper">thinnkeeper</a>';
    document.getElementById("contacts").innerHTML = create_contacts;
    box.appendChild(newElement);
}

function remove_blink_input(){
    const blink = document.getElementById("blink");
    const input_field = document.getElementById("input_field");
    add_replacement_input(input_field.value);
    blink.remove();
    input_field.remove();
}

function add_blink_input(){
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