class contacts extends section {
    constructor() {}

    render(){
        super.remove_blink_input();
        let box = document.querySelector(".box");
        let newElement = document.createElement("p");
        newElement.setAttribute("id", "contacts");
        box.appendChild(newElement);
        let create = '|<br>└&gt; <span class="neon_green">Email</span>: scsmonteiro.work@gmail.com<br>';
        create += '└&gt; <span class="neon_green">LinkedIn</span>: <span class="neon_purple"><a href="https://www.linkedin.com/in/sebastianismo" target="_blank" rel="noopener noreferrer">Sebastião Monteiro</a></span>';
        document.getElementById("contacts").innerHTML = create;
        super.add_blink_input();
        super.remove_id("rep");
        super.remove_id("contacts");
    }
}