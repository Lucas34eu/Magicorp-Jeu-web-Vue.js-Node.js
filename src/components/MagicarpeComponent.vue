<template>


    <div class="item">
        <img class="new" src="../assets/new.png" v-show="news">
        <img style="margin-top:10px;" :src=img>
        <p>{{ titre }}</p>
        <p>{{ description }}</p>
        <p v-if="rarete == 0">Commun</p>
        <p v-if="rarete == 1">Rare</p>
        <p v-if="rarete == 2">Epic</p>
        <p v-if="rarete == 3">Legendaire</p>

    </div>





</template>

<script>
export default {
    name: 'MagicarpeComponent',
    props: {
        titre: {
            type: String
        },
        description: {
            type: String
        },
        img: {
            type: Object,
            required: true
        },
        rarete: {
            type: Number
        },
        news: {
            type: Boolean
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item {
    background-color: rgb(218, 218, 218);
    max-width: 300px;
    max-height: 400px;
    min-width: 200px;
    min-height: 200px;
    margin: 10px;
    border: 1px solid black;
}

img {
    width: 50%;


}

.new {
    width: 20%;
    float: left;
    margin-right: -50px;
}
</style>
