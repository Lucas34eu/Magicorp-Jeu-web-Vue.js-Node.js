<template>
  <h1>Bienvenue sur le Pokedex </h1>
  <h3>Ici vous retrouverez tous les magicarpes répertorié</h3>
  <div class="row">

    <MagicarpeComponent v-for="item in items" :img="item.image.source" :titre="item.titre"
      :description="item.description" :rarete="item.rarete" :news="item.news" :key="item.titre" />
  </div>

</template>

<script>
import MagicarpeComponent from "../components/MagicarpeComponent.vue";
// @ is an alias to /src


export default {

  components: { MagicarpeComponent },
  data() {
    return {
      restaurantName: "La belle vue",
      shoppingCart: 0,
      items: [
        {
          titre: "Magicarpe Doré",
          description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil",
          image: {
            source: "/images/dorer.png"
          },
          rarete: 3,
          news: true
        },
        {
          titre: "Magicarpe Bicolor",
          description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil",
          image: {
            source: "/images/bicolor.png",
            
          },
          rarete: 1,
          news: true
        },
        {
          titre: "Magicarpe Bicolor Rose",
          description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil",
          image: {
            source: "/images/bicolor-rose.png"
          },
          rarete: 0,
          
        },
        {
          titre: "Magicarpe Bleu",
          description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil",
          image: {
            source: "/images/bleu.png"
          },
          rarete: 1
        },
        {
          titre: "Magicarpe Bulle Gris",
          description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil",
          image: {
            source: "/images/bulle-gris.png"
          },
          rarete: 2
        },
        {
          titre: "Magicarpe Bulle Violet",
          description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil",
          image: {
            source: "/images/bulle-violet.png"
          },
          rarete: 2
        },
        {
          titre: "Magicarpe Chocolat",
          description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil",
          image: {
            source: "/images/chocolat.png"
          },
          rarete: 2
        },
        {
          titre: "Magicarpe Koy",
          description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil",
          image: {
            source: "/images/koî.png"
          },
          rarete: 1
        },
        {
          titre: "Magicarpe Voleur",
          description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil",
          image: {
            source: "/images/masquer.png"
          },
          rarete: 1
        },
        {
          titre: "Magicarpe Strié",
          description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil",
          image: {
            source: "/images/strier.png"
          },
          rarete: 1
        },
        {
          titre: "Magicarpe Tigré",
          description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil",
          image: {
            source: "/images/tigrer.png"
          },
          rarete: 2
        },
        {
          titre: "Magicarpe Violet",
          description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil",
          image: {
            source: "/images/violet.png"
          },
          rarete: 2
        },
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.row {
  width: 75%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
</style>

