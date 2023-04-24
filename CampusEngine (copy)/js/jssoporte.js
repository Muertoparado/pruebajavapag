export default{
    
    soporte(){
        document.querySelector("#soporte").insertAdjacentHTML("beforeend",`
        <div>
        <h1>Preguntas frecuentes</h1>
    </div>
    <div class="" id="accordionExample">
        <div class="accordion">
            <h2 class="">
                <button>
                    ¿Que servicios ofrece campus
                </button>
            </h2>
            <div>
            </div>
        </div>
    </div>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    ¿estas servicios y zonas manejan algun tipo de horario?
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
            </div>
        </div>
    </div>
         <div class="accordion" id="accordionExample">
          <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                      aria-expanded="true" aria-controls="collapseOne">
                       ¿Puedo usar o solicitar servicios en cualquier momento ?
                 </button>
                 </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
            </div>
        </div>
    </div>`)
    }
}