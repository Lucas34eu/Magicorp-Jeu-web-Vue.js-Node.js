<template>
  <h1>Bienvenue sur le Pokedex </h1>
  <h3>Ici vous retrouverez tous les magicarpes répertorié</h3>
  <div class="row">
    
    <MagicarpeComponent v-for="item in items" :img="item.image" :titre="item.titre" :description="item.description" :rarete="item.rarete" :news="item.news" :date_acquisition="item.createdAt" :today="today" :key="item.titre" />
  
    </div>

</template>

<script>
import axios from 'axios';
import MagicarpeComponent from "../components/MagicarpeComponent.vue";

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let today= year +"-"+ month+"-"+day

//let date_acquisition = this.items.createdAt.slice(0,-1)
//console.log(date_acquisition)
console.log(today)


// @ is an alias to /src
export default {

  components: { MagicarpeComponent },
  data() {
    return {
      items: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:8081/api/pokemon/getAll')
      .then(response => (this.items = response.data))
      
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

@media screen and (max-width:500px){
  .row {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    grid-auto-rows: minmax(50px, auto);
    margin-bottom: 50px;
  }

}

</style>

