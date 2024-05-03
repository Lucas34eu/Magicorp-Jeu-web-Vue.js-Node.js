<template>
   <div id="peche">
      <h1>Bienvenue dans la mer mystérieuse.</h1>
      <h3> Ici vous pourrez pêcher et tenter d'attraper des magicarpes</h3>
      <img id="gify" src="../../public/images/peche.gif">
      <br>
      <button @click="Compteur" id="btn_canne">Lancer la canne à pêche </button>

   </div>
   <p id="decompte"></p>
   <div id="demo">
      <div id="peche_en_cours">

         <input id="ResultatRandom" type="hidden">
         <h1 id="titre_touche">Vous avez une touche ! </h1>
         <h4> Vite ! Maintenant vous devez l'attraper !</h4>
         <p>Cliquez rapidement sur le magicarpe pour l'attraper</p>
         <p id="annonce_rarete"></p>
         <p id="timer"></p>

         <ToucheComponent @increaseBy="hurt" />

      </div>


      <div id="gagner">

         <h1 id="titre_touche">BRAVO ! </h1>
         <h4> Vous avez reussi à attraper un : </h4>
         <div class="item_touche">

            <img id="pokeball" src="../../public/images/pok1.gif">

            <div id="info_touche">
               <p id="titre" style="font-size:larger"></p>
               <p id="rarete" style="font-weight: bold;"></p>
               <img id="cible2">
            </div>
         </div>

         <button id="btn_fermer" @click="fermerPrise">Quitter</button>

      </div>



      <div id="perdu">
         <h1 id="titre_touche">Oh non le magicarpe s'est échappé ! </h1>
         <h4> La prochaine sera peut être la bonne</h4>
         <img src="@/assets/images/ciao_magicarp.gif"> <br>
         <button id="btn_fermer" @click="fermerPrise">Quitter</button>
      </div>

   </div>




</template>


<style lang="scss">
#peche_en_cours {
   height: 100%;
}


#perdu {
   display: none;
   height: 100%;
}


#titre_touche {
   padding-top: 20px;
}

#gagner {
   display: none;
   height: 100%;
}


#demo {
   display: none;
   position: relative;
   height: 600px;
   width: 50%;
   margin-top: -420px;
   margin-left: auto;
   margin-right: auto;
   text-transform: uppercase;
   z-index: 1000;
   background-color: rgb(241, 241, 241);
}

#btn_canne {
   margin-top: 30px;
   height: 50px;
   cursor: pointer;
   margin-left: auto;
   margin-right: auto;
   font-weight: bold;
}

#btn_fermer {
   margin-top: 10px;
   height: 50px;
   cursor: pointer;
   margin-left: auto;
   margin-right: auto;
   font-weight: bold;
   width: 300px;
}

.magicarpFind {
   backdrop-filter: blur(2px);
}

#info_touche {
   opacity: 1;
   transition: opacity 2s linear;
}


@media screen and (max-width:500px) {
   #demo {
      height: 700px;
      width: 80%;
      margin-top: -470px;
   }

   #titre_touche {
      font-size: 19px;
   }

   .item {
      width: 180px;
      font-size: larger;
   }


   .new {
      width: 28%;

   }

   .item_touche {
      height: 67%;
   }

   #cible2 {

      width: 30%;
   }

   #cible {

      width: 50%;
   }
}



.item_touche {
   width: 90%;
   height: 67%;
   margin-left: auto;
   margin-right: auto;
   border: 1px solid black;
}


.new {
   width: 20%;
   float: left;
   margin-right: -50px;
}

#pokeball {

   margin-top: 20px;
   width: 120px;
   background-repeat: no-repeat;
   border: none;
   background-color: none;
}

#cible2 {
   width: 150px;
   ;
}
</style>



  
<script>
var pokemon = 0
var randomPV = 0

var x2 = ""
const sound = require("@/assets/mort.mp3");
const sound2 = require("@/assets/combat.mp3");
const audio2 = new Audio(sound2);

const sound3 = require("@/assets/lose.mp3");
const audio3 = new Audio(sound3);
const sound4 = require("@/assets/result.mp3");
const audio4 = new Audio(sound4);
import axios from 'axios';
import ToucheComponent from "../components/ToucheComponent.vue";



export default {

   components: { ToucheComponent },

   data() {
      return {
         compteur: false,
         items: null
      }
   },
   methods: {
      Compteur() {
         document.getElementById("btn_canne").style.display = "none"

         var deadline = new Date();
         deadline.setSeconds(deadline.getSeconds() + 1)

         setTimeout(() => {
            audio2.play();
         }, 7000)
         //console.log(random)

         var x = setInterval(function () {
            var now = new Date().getTime();
            var t = deadline - now;


            document.getElementById("decompte").innerHTML = "Peche en cours"


            if (t <= 0) {

               clearInterval(x)
               let random = Math.floor(Math.random() * 1000)

               if (random > 0 & random < 900) {
                  pokemon = Math.floor(Math.random() * 5)
                  randomPV = Math.floor(Math.random() * 10)

                  console.log("PV :" + randomPV)
                  console.log("commun")
                  console.log(pokemon)
               }

               if (random > 900 & random < 970) {
                  pokemon = Math.floor(Math.random() * 8) + 5
                  randomPV = Math.floor(Math.random() * 10) + 5
                  console.log("PV :" + randomPV)
                  console.log("rare")
                  console.log(pokemon)

                  document.getElementById("annonce_rarete").innerHTML = "RARE"
                  document.getElementById("annonce_rarete").color = "blue"
               }

               if (random > 970 & random < 990) {
                  pokemon = Math.floor(Math.random() * 11) + 8
                  randomPV = Math.floor(Math.random() * 10) + 10
                  console.log("PV :" + randomPV)
                  console.log("epic")
                  console.log(pokemon)

                  document.getElementById("annonce_rarete").innerHTML = "EPIC"
                  document.getElementById("annonce_rarete").color = "purple"
               }

               if (random > 990) {
                  pokemon = 14
                  randomPV = Math.floor(Math.random() * 10) + 15
                  console.log("PV :" + randomPV)
                  console.log("legendaire")
                  console.log(pokemon)

                  document.getElementById("annonce_rarete").innerHTML = "LEGENDAIRE"
                  document.getElementById("annonce_rarete").color = "orange"
               }



               let top2 = Math.floor(Math.random() * 400)
               let left2 = Math.floor(Math.random() * 230)
               document.getElementById("cible").style.top = top2 + "px"
               document.getElementById("cible").style.left = left2 + "px"

               document.getElementById("demo").style.display = "block"
               document.getElementById("peche").style.filter = "blur(5px)"
               document.getElementById("nav").style.filter = "blur(5px)"
               document.getElementById("footer").style.filter = "blur(5px)"

               var deadline2 = new Date();

               deadline2.setSeconds(deadline2.getSeconds() + 10)



               x2 = setInterval(function () {

                  var now2 = new Date().getTime();
                  var t2 = deadline2 - now2;
                  var seconds2 = Math.floor((t2 % (1000 * 60)) / 1000);
                  document.getElementById("timer").innerHTML = "il vous reste : " + seconds2 + " s"




                  if (t2 < 1) {

                     clearInterval(x2)
                     audio2.pause()
                     audio3.play()
                     setTimeout(() => {
                        audio4.play()
                     }, 2000)

                     document.getElementById("peche_en_cours").style.display = "none"
                     document.getElementById("perdu").style.display = "block"
                  }



               }, 1000)


               clearInterval(x);

            }
         }, 1000);


      },
      hurt() {
         let top = Math.floor(Math.random() * 400)
         let left = Math.floor(Math.random() * 230)


         if (randomPV <= 1) {
            console.log("Pokemon" + pokemon)
            document.getElementById("cible2").src = '@/assets/images/' + this.items[pokemon].image
            document.getElementById("titre").innerHTML = this.items[pokemon].titre

            axios.post('http://localhost:8081/api/inventaire/addInventaire', {
               userId: 1,
               pokemonId: pokemon
            })
               .then(function (response) {
                  console.log(response);
               })
               .catch(function (error) {
                  console.log(error);
               });

            switch (this.items[pokemon].rarete) {
               case 0:
                  document.getElementById("rarete").innerHTML = "COMMUN"
                  document.getElementById("rarete").style.color = "black"
                  break;

               case 1:
                  document.getElementById("rarete").innerHTML = "RARE"
                  document.getElementById("rarete").style.color = "orange"
                  break;

               case 2:
                  document.getElementById("rarete").innerHTML = "EPIC"
                  document.getElementById("rarete").style.color = "purple"
                  break;

               case 3:
                  document.getElementById("rarete").innerHTML = "LEGENDAIRE"
                  document.getElementById("rarete").style.color = "gold"
                  break;

               default:
                  break;
            }

            this.compteur = true
            clearInterval(x2)
            audio2.pause()

            document.getElementById("peche_en_cours").style.display = "none"
            document.getElementById("gagner").style.display = "block"
            document.getElementById("info_touche").style.opacity = 1
            let audio = new Audio(sound);
            audio.play();



         }
         document.getElementById("cible").style.top = top + "px"
         document.getElementById("cible").style.left = left + "px"
         console.log(top + ", " + left)
         randomPV--

      },
      fermerPrise() {
         window.location.href = "/";
      }
   },
   mounted() {
      axios
         .get('http://localhost:8081/api/pokemon/getAll')
         .then(response => (this.items = response.data))
   }
}

</script>
