let datos = [];

const mostrar = document.getElementById("mostrar")

//capturo los datos que ingresamos 
document.getElementById("calcularimc").addEventListener("click", function calculo() {

   let sex = document.getElementById("selectSexo").value;
   let edad = document.getElementById("inputEdad").value;
   let peso = document.getElementById("inputPeso").value;
   let estatura = document.getElementById("inputEstatura").value;

   let imc = (peso / (estatura ** 2));

   console.log(sex + ", edad " + edad + ", peso " + peso + ", est " + estatura + ", imc " + imc.toFixed(2));
   let contenedor = document.getElementById("contenedorModal")



   if ((peso == "") || (estatura == "")) {
      alert("Ingresa peso y estatura")}

   else if (imc < 18.5) {
      contenedor.innerHTML = `Tu Indice de masa es: <h2> ${imc.toFixed(2)} </h2> Estás en:
          <h3 id="baj" >Bajo peso</h3>`}

   else if (imc >= 18.5 && imc <= 24.9) {
      contenedor.innerHTML = `Tu Indice de masa es: <h2> ${imc.toFixed(2)} </h2> Estás en:
        <h3 id="sal" >Peso saludable</h3>`}

   else if (imc >= 25 && imc <= 29.9) {
      contenedor.innerHTML = `Tu Indice de masa es: <h2> ${imc.toFixed(2)} </h2> Estás en:
        <h3 id="sobr" >Sobrepeso</h3>`}
   else if (imc >= 30 && imc <= 39.9) {
      contenedor.innerHTML = `Tu Indice de masa es: <h2> ${imc.toFixed(2)} </h2> Estás en:
        <h3 id="obe"  >Obesidad</h3>`}
   else if (imc > 40) {
      contenedor.innerHTML = `Tu Indice de masa es: <h2> ${imc.toFixed(2)} </h2> Estás en:
          <h3  id="ext" >  Obesidad extrema o de alto riesgo  </h3>`}


   agregardatos(sex, edad, peso, estatura, imc);
   guardardatos();
})

const agregardatos = (sexo, edad, peso, estatura, imc) => {
   let registro = {
      sexo: sexo,
      edad: edad,
      peso: peso,
      estatura: estatura,
      imc: imc
   }
   datos.push(registro);
   console.log(datos)
}

const guardardatos = () => {
   localStorage.setItem('usuario', JSON.stringify(datos))
   mostrardatos();
}

const mostrardatos = () => {
   // mostrar.innerHTML=" ";
   datos = JSON.parse(localStorage.getItem('usuario'))
   document.getElementById('myfirstchart').innerHTML=""

   // console.log(datos)

   new Morris.Bar({
      // ID of the element in which to draw the chart.
      element: 'myfirstchart',
      // Chart data records -- each entry in this array corresponds to a point on
      // the chart.
      data: datos,
      // The name of the data record attribute that contains x-values.
      xkey: ['edad'],
      // A list of names of data record attributes that contain y-values.
      ykeys: ['imc'],
      // Labels for the ykeys -- will be displayed when you hover over the
      // chart.
      labels: ['imc'],
      resize: true,
      gridTextColor: ['#FFFFFF'],
      gridTextSize: 25, 
      barColors: ['#87CEFA'],
    });
}

