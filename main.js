// Wait for the DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input_field");
    inputField.addEventListener("keydown", checkKey);
  
    // Attach event listeners to the command buttons (visible on small screens)
    const commandButtons = document.querySelectorAll(".command-buttons button");
    commandButtons.forEach(button => {
      button.addEventListener("click", () => {
        const command = button.getAttribute("data-command").toUpperCase();
        handleCommand(command);
      });
    });
  });
  
  function checkKey(event) {
    if (event.key === "Enter") {
      const inputField = event.target;
      const command = inputField.value.trim().toUpperCase();
      switch (command) {
        case "HELP":
        case "H":
          processCommand("help", getHelpContent());
          break;
        case "ABOUT":
        case "ABT":
          processCommand("about", getAboutContent());
          break;
        case "ACADEMIC":
        case "ACD":
          processCommand("academic", getAcademicContent());
          break;
        case "PROJECTS":
        case "PRT":
          processCommand("projects", getProjectsContent());
          break;
        case "CONTACTS":
        case "CTS":
          processCommand("contacts", getContactsContent());
          break;
        case "CLEAR":
        case "C":
          clearConsole();
          break;
        default:
          processInvalidCommand(inputField.value);
      }
    }
  }

  function handleCommand(cmd) {
    switch(cmd) {
      case "ABOUT":
        processCommand("about", getAboutContent());
        break;
      case "ACADEMIC":
        processCommand("academic", getAcademicContent());
        break;
      case "PROJECTS":
        processCommand("projects", getProjectsContent());
        break;
      case "CONTACTS":
        processCommand("contacts", getContactsContent());
        break;
      case "CLEAR":
        clearConsole();
        break;
      default:
        processInvalidCommand(cmd);
    }
  }
  
  function processCommand(sectionId, content) {
    removeBlinkAndInput();
    createSection(sectionId, content);
    addBlinkAndInput();
  }
  
  function processInvalidCommand(command) {
    removeBlinkAndInput();
    createSection("rep", `#${command} <span class="neon_purple"><-- Invalid command.</span>`);
    addBlinkAndInput();
  }
  
  // A helper function to create and append a new section
  function createSection(id, content) {
    const box = document.querySelector(".box");
    const section = document.createElement("p");
    section.setAttribute("id", id);
    section.innerHTML = content;
    box.appendChild(section);
  }
  
  function removeBlinkAndInput() {
    const blink = document.getElementById("blink");
    const inputField = document.getElementById("input_field");
    // Create a replacement line showing the previous command, if needed
    if (inputField) {
      createSection("rep", `#${inputField.value}`, false);
    }
    blink && blink.remove();
    inputField && inputField.remove();
  }
  
  function addBlinkAndInput() {
    const box = document.querySelector(".box");
  
    // Create the blinking cursor element
    const blink = document.createElement("span");
    blink.setAttribute("id", "blink");
    blink.textContent = ">";
    box.appendChild(blink);
  
    // Create the new input field without inline event attributes
    const inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("id", "input_field");
    inputField.setAttribute("class", "firstinput");
    inputField.setAttribute("class", "all_unset");
    inputField.setAttribute("size", "50");
    box.appendChild(inputField);
  
    inputField.focus();
    // Attach the event listener dynamically
    inputField.addEventListener("keydown", checkKey);
  }
  
  function clearConsole() {
    const box = document.querySelector(".box");
    box.innerHTML = "";
    addBlinkAndInput();
  }
  
  // The content functions return the HTML content for each section.
  // These functions help separate content from logic.
  
  function getHelpContent() {
    return `
      Available commands:<br>
      ├─ <span class="neon_green">about</span> — section about me<br>
      ├─ <span class="neon_green">academic</span> — section about my academic path<br>
      ├─ <span class="neon_green">projects</span> — section about my personal projects<br>
      ├─ <span class="neon_green">contacts</span> — section about my contacts<br>
      └─ <span class="neon_green">clear || c</span> — clear console`;
  }
  
  function getAboutContent() {
    return `
      <span class="neon_green">About</span>:<br>
        └─ Hey there! I'm <span class="neon_green">Sebastião Condeixa Sarreira Monteiro</span> - a passionate software and web developer from Portugal. I love turning ideas into digital experiences and have been exploring the world of code ever since I can remember.
        Currently, I'm diving deep into Computer Science at Escola Superior de Tecnologia at Instituto Politécnico de Castelo Branco. This journey is not just about learning the latest in technology, but also about pushing creative boundaries and solving problems in fun, unexpected ways.
        When I'm not busy coding, you'll likely find me curled up with a good book or experimenting with new tunes on my guitar. I believe that creativity isn't limited to one field - whether it's tech, art, or music, it's all about expressing yourself and connecting with others.
        Thanks for stopping by to learn a bit about me. Stick around, explore my projects, and let's see where this digital adventure takes us!`;
  }
  
  function getAcademicContent() {
    return `
      <span class="neon_green">Licenciatura em Informática e Multimédia</span>: 09/2020 - Today<br>
      ├─ Instituto Politécnico de Castelo Branco - Escola Superior de Tecnologia<br>
      └─ <a href="http://www.ipcb.pt" target="_blank" rel="noopener noreferrer">ipcb.pt</a><br>
      <span class="neon_green">Coursera Certificates</span>: 08/2021<br>
      └─ Python for Everybody:<br>
      &emsp;├── Programming for Everybody (Getting Started with Python)<br>
      &emsp;│ &emsp;https://www.coursera.org/account/accomplishments/certificate/FJTRVLLP5DE2<br>
      &emsp;├── Python Data Structures<br>
      &emsp;│ &emsp;https://www.coursera.org/account/accomplishments/certificate/AXHGY65YLYXK<br>
      &emsp;├── Using Python to Access Web Data<br>
      &emsp;│ &emsp;https://www.coursera.org/account/accomplishments/certificate/2963C5CEBB6L<br>
      &emsp;├── Using Databases with Python<br>&emsp;│ &emsp;https://www.coursera.org/account/accomplishments/certificate/BA8D6942ULEB<br>
      &emsp;└── Capstone: Retrieving, Processing, and Visualizing Data with Python<br>
      &emsp;&emsp;&emsp;https://www.coursera.org/account/accomplishments/certificate/Z6QJULXU295A<br>
      └─ Django for Everybody:<br>
      &emsp;└── Web Application Technologies and Django<br> 
      &emsp;&emsp;&emsp;https://www.coursera.org/account/accomplishments/certificate/776CUELF8BZP<br>
      <span class="neon_green">Nivél Secundário de Educação - Curso Científico-Humanístico de Artes Visuais</span>: 09/2010 - 07/2013<br>
      ├─ Escola Secundária/3 de Amato Lusitano<br>
      └─ http://aeal.edu.pt/<br>`;

  }
  
  function getProjectsContent() {
    return `
      <span class="neon_green">Projects</span>:<br>
      └─ GitHub: <span class="neon_purple"><a href="https://github.com/thinnkeeper" target="_blank" rel="noopener noreferrer">thinnkeeper</a></span>`;
  }
  
  function getContactsContent() {
    return `
      <span class="neon_green">Contacts</span>:<br>
      ├─ Email: scsmonteiro.work@gmail.com<br>
      └─ LinkedIn: <span class="neon_purple"><a href="https://www.linkedin.com/in/sebastianismo" target="_blank" rel="noopener noreferrer">Sebastião Monteiro</a></span>`;
  }
  