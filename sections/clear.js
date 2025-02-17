class clear extends section {
    constructor() {}

    render(){
    let box = document.querySelector(".box");
    box.innerHTML = '';
    super.add_blink_input();
    }
}