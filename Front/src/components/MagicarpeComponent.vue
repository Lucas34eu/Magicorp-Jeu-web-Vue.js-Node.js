<template>


    <div class="item">
        <img class="new" src="../assets/new.png" v-show="date_acquisition == today">
        <img :src="require(`@/assets/images/${img}`)">
        <p>{{ titre }}</p>
        <p>{{ description }}</p>
        
        <p v-if="rarete == 0">Commun</p>
        <p style="color:blue" v-if="rarete == 1">Rare</p>
        <p style="color:#bb00bb" v-if="rarete == 2">Epic</p>
        <p style="color:orange" v-if="rarete == 3">Legendaire</p>

        <p v-show="quantite"> Vous en possédés : {{ quantite }}</p>
        <img v-show="quantite" @click="$emit('vendre')" id="vendre" src="@/assets/vendre.png" style="width: 50px;">

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
            type: String
        },
        rarete: {
            type: Number
        },
        quantite: {
            type: Number
        },
        date_acquisition: {
            type: Date
        },
        today : {
            type: Date
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item {
    background-color: rgb(218, 218, 218);
    width: 300px;
    height: 430px;
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
@media screen and (max-width:500px){
    .item {
        width: 180px;
        font-size: larger;
        height: 400px;
    }

    img {
        width: 70%;
    }

    .new {
        width: 28%;
        
    }

  }
</style>
