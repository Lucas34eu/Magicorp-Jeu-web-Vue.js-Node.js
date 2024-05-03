<template>
  <h1>Bienvenue dans votre Inventaire </h1>
  <h3>Ici vous retrouverez tous les magicarpes que vous avez capturé</h3>
  <div class="row">

    <MagicarpeComponent @vendre="vendre(item.rarete, item.id)" v-for="item in items" :img="item.image" :titre="item.titre"
      :description="item.description" :rarete="item.rarete" :news="item.news" :date_acquisition="item.createdAt"
      :today="today" :quantite="item.quantite" :key="item.titre" />

  </div>

</template>

<script>
import axios from 'axios';
import MagicarpeComponent from "../components/MagicarpeComponent.vue";

const date = new Date();
let pieceOr = 0
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let today = year + "-" + month + "-" + day

// @ is an alias to /src
export default {

  components: { MagicarpeComponent },
  data() {
    return {
      items: []
    }
  },
  methods: {
    vendre(param,param2) {
      console.log(param)
      switch (param) {
        case 0:
          pieceOr = 2
          break;
        case 1:
          pieceOr = 4
          break;
        case 2:
          pieceOr = 6
          break;
        case 3:
          pieceOr = 10
          break;
        
          
      }
      console.log(pieceOr)

      confirm("Voulez vous vendre ce magikarpe au Zoo Pokemon ? Vous recevrez " + pieceOr + " pièce d'or")
      {
        axios.put('http://localhost:8081/api/user/ChangeMoneyfor1User/1', {
          money: pieceOr
        })
          .then(function (response) {
            console.log(response)
            alert("Vous avez recu" + pieceOr + " pièces d'or")
            axios.post('http://localhost:8081/api/inventaire/RetirerPokemonDeInventaire', {
              userId: 1,
              pokemonId: param2
            })
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  },

  mounted() {
    axios.get('http://localhost:8081/api/inventaire/getInventairebyId/1').then(
      response => (response.data.forEach(element => {
        console.log(element.quantite)
        axios.get('http://localhost:8081/api/pokemon/getPokemonbyId/' + element["pokemonId"]).then(
          response => (this.items.push({ 'id':response.data.id,'titre': response.data.titre, 'image': response.data.image, 'description': response.data.description, 'rarete': response.data.rarete, 'createdAt': response.data.createdAt, 'today': today, 'quantite': element.quantite })))
      })))

  }
}
</script>

<style scoped lang="scss">
.row {
  width: 90%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  margin-bottom: 50px
}

@media screen and (max-width:500px) {
  .row {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    grid-auto-rows: minmax(50px, auto);
    margin-bottom: 50px;
  }

}
</style>

