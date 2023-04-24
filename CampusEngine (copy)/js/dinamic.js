// script llenado dinamico
// script accordion
export default{


index(){
    document.querySelector("#index1").insertAdjacentHTML("beforeend",`
    <div class="first-message" id="seccionInformativa">
<br><br><br>
            <h2>Bienvenido Camper</h2>
            <br>
            <p>Campus Programmers Land</p>
            <br><br>

            <h4>Acerca de la pagina</h4>
            <br><br>
            <p>Esta pagina informativa acerca de nuestros servicios ofrecidos a nuestros queridos campers</p>

        </div>
        <div class="team-container homepage">
            <div>
                <img src="/images/Space astronaut cartoon.png" alt="">
            </div>
            <div class="Contactanos">
                <p>Contactanos</p>
                <table class="social contact-info-container">
                    <tr>
                        <th class="homepage">
                            <img src="/images/whatsapp.svg" class="social">
                            <p>5165165165</p>

                        </th>
                    </tr>
                    <tr>
                        <th class="homepage">
                            <img src="/images/twitter.svg" alt="">
                            <p>@sdvcsd</p>

                        </th>
                    </tr>

                    <tr>
                        <th class="homepage     FAQ">
                            <img src="/images/facebookF.svg" alt="">
                            <p>dsfgvdf</p>

                        </th class="homepage">
                    </tr>
                    <tr>
                        <th class="homepage">

                            <img src="/images/instagram.svg" alt="">
                            <p>@fdvdf</p>

                        </th>
                    </tr>

                </table>


            </div>
        </div>
`)
},

}