class other extends section {
    constructor() {}

    render(){
        super.remove_blink_input();
        super.add_blink_input();
        document.getElementById("rep").innerHTML += '&emsp;&emsp;&emsp;<span class="neon_purple"><-- Invalid command.</span>';
        super.remove_id("rep");
    }
}