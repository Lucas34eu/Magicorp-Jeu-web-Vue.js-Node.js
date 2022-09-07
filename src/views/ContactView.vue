<template>
   <div>
      <h1>Bienvenue dans la mer mystérieuse.</h1>
      <h3> Ici vous pourrez pêcher et tenter d'attraper des magicarpes</h3>
      <img id="gify" src="../../public/images/peche.gif">
      <br>
      <input type="button" @click="Compteur" id="btn_canne" class="button" value="Lancer la canne à pêche">
      <p id="demo"></p>

   </div>


</template>


<style lang="scss">
#demo{
   padding-top: 60px;
   font-weight: bolder;
   font-size: 30px;
   height: 100px;
   width: 500px;
   margin-left: auto;
   margin-right: auto;
   text-transform: uppercase;



}
.button {

   margin-top: 30px;
   height: 50px;
   width: 600px;
   cursor: pointer;
   margin-left: auto;
   margin-right: auto;
   font-weight: bold;
}
</style>




<script>



export default {
   methods: {
      Compteur() {
         document.getElementById("btn_canne").style.display = "none"
         var deadline = new Date();
         deadline.setSeconds(deadline.getSeconds() + 13)
         let random = Math.floor(Math.random() * 1000)
         //console.log(random)

         var x = setInterval(function () {
            var now = new Date().getTime();
            var t = deadline - now;

            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            document.getElementById("demo").innerHTML = "Pêche fini dans " +seconds + "s ";
            if (t < 0) {
               clearInterval(x);
               

               if (random > 0 & random < 700) {
                  console.log('commun');
                  document.getElementById("demo").innerHTML = "commun";
                  document.getElementById("demo").style.backgroundColor = "rgb(161 140 255)"
                  document.getElementById("btn_canne").style.display = "block"
               }

               if (random > 700 & random < 850) {
                  console.log('rare');
                  document.getElementById("demo").innerHTML = "rare";
                  document.getElementById("demo").style.backgroundColor = "rgb(65, 194, 33)"
                  document.getElementById("btn_canne").style.display = "block"
               }

               if (random > 850 & random < 950) {
                  console.log('rare');
                  document.getElementById("demo").innerHTML = "epic";
                  document.getElementById("demo").style.backgroundColor = "rgb(199, 49, 219)"
                  document.getElementById("btn_canne").style.display = "block"
               }

               if (random > 950 & random < 999) {
                  console.log('legendaire');
                  document.getElementById("demo").innerHTML = "legendaire";
                  document.getElementById("demo").style.backgroundColor = "rgb(241, 119, 19)"
                  document.getElementById("btn_canne").style.display = "block"
               }
               
            }
}, 1000);


      }
   }
}
</script>
