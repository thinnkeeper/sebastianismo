class about extends section {
    constructor() {}

    render(){
        super.remove_blink_input();
        let box = document.querySelector(".box");
        let newElement = document.createElement("p");
        newElement.setAttribute("id", "about");
        box.appendChild(newElement);
        let create = 'Hello, my name is <span class="neon_green">Sebastião Condeixa Sarreira Monteiro</span> I am a software/web developer from Portugal.<br>';
        create += 'I study computer science at Escola Superior de Tecnologia do Instituto Politécnico de Castelo Branco.<br>';
        create += 'As well as a programmer, I am also an avid reader and musician.<br>';
        document.getElementById("about").innerHTML = create;
        super.add_blink_input();
        super.remove_id("rep");
        super.remove_id("about");
    }
}