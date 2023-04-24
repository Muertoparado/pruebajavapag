export default{

tiendaComida(){
    document.getElementById("tiendacomida").insertAdjacentHTML("beforeend",`
    <header>
        <br><br><br><br>
        <h1>Cafeteria virtual</h1>
        <p>Seccion compra</p>
    </header>
    <br><br><br><br>
    <div class="">
        <h1>catalogo</h1>
        <div id="contenedor-tarjetas">
            
            <div class="carts" style="width: 18rem;">
                
                <img src="/images/Color-del-cafe-filtrado-y-su-parecido-con-el-color-de-un-vino-tinto.-scaled.jpg"  alt="...">
                <h5 >Cafe</h5>
                <p>21</p> 
                <button class="tarjetas">añadir carrito</button>
            </div>
            
            <div class="carts" style="width: 18rem;">
                <img src="/images/Pastel-de-Pollo7.jpg"  alt="...">
                <h5 >Pastel</h5>
                <p>54</p>
                  <button class="tarjetas">añadir carrito</button>
            </div>
            <div class="carts" style="width: 18rem;">
                
                <img src="/images/papasmargarita.jpg"  alt="...">
                <h5 >Papas</h5>
                <p>23</p>
                  <button class="tarjetas">añadir carrito</button>
            </div>
    </div>
    `)

},
}