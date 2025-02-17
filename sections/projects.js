class projects extends section {
    constructor() {}

    render(){
        super.remove_blink_input();
        let box = document.querySelector(".box");
        let newElement = document.createElement("p");
        newElement.setAttribute("id", "projects");
        box.appendChild(newElement);
        let create = '└&gt; <span class="neon_green">GitHub</span>: <span class="neon_purple"><a href="https://github.com/thinnkeeper" target="_blank" rel="noopener noreferrer">thinnkeeper</a></span>';
        document.getElementById("projects").innerHTML = create;
        super.add_blink_input();
        super.remove_id("rep");
        super.remove_id("projects");
    }
}