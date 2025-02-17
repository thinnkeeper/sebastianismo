class academic extends section {
    constructor() {}

    render(){
        super.remove_blink_input();
        let box = document.querySelector(".box");
        let newElement = document.createElement("p");
        newElement.setAttribute("id", "academic");
        box.appendChild(newElement);
        let create = '<span class="neon_green">Licenciatura em Informática e Multimédia</span>: 10/2024<br>Instituto Politécnico de Castelo Branco - Escola Superior de Tecnologia<br>http://www.ipcb.pt<br><span class="neon_green">Coursera Certificates</span>: 08/2021<br>Python for Everybody:<br>- Programming for Everybody (Getting Started with Python)<br>https://www.coursera.org/account/accomplishments/certificate/FJTRVLLP5DE2<br>- Python Data Structures<br>https://www.coursera.org/account/accomplishments/certificate/AXHGY65YLYXK<br>- Using Python to Access Web Data<br>https://www.coursera.org/account/accomplishments/certificate/2963C5CEBB6L<br>- Using Databases with Python<br>https://www.coursera.org/account/accomplishments/certificate/BA8D6942ULEB<br>- Capstone: Retrieving, Processing, and Visualizing Data with Python<br>https://www.coursera.org/account/accomplishments/certificate/Z6QJULXU295A<br>Django for Everybody:<br>- Web Application Technologies and Django<br>https://www.coursera.org/account/accomplishments/certificate/776CUELF8BZP<br><span class="neon_green">Nivél Secundário de Educação - Curso Científico-Humanístico de Artes Visuais</span>: 09/2010 - 07/2013<br>- Escola Secundária/3 de Amato Lusitano<br>http://aeal.edu.pt/<br>';
        document.getElementById("academic").innerHTML = create;
        super.add_blink_input();
        super.remove_id("rep");
        super.remove_id("academic");
    }
}