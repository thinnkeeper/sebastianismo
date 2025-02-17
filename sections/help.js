class Help extends section {
    constructor() {}

    render(){
        super.remove_blink_input();
        let box = document.querySelector(".box");
        let newElement = document.createElement("p");
        newElement.setAttribute("id", "help");
        box.appendChild(newElement);
        let create = 'Available commands:<br><span class="neon_green">about</span>&emsp;&emsp;&emsp;&emsp;section about me<br><span class="neon_green">academic</span>&emsp;&emsp;&emsp;&emsp;section about my academic path<br><span class="neon_green">projects</span>&emsp;&emsp;&emsp;&emsp;section about my personal projects<br><span class="neon_green">contacts</span>&emsp;&emsp;&emsp;&emsp;section about my contacts<br><span class="neon_green">clear || c</span>&emsp;&emsp;&emsp;&emsp;clear console';
        document.getElementById("help").innerHTML = create;
        super.add_blink_input();
        super.remove_id("rep");
        super.remove_id("help");
    }
}