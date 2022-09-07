<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <input type="button" @click="Compteur" id="btn_canne" class="button" value="Lancer la canne à pêche">
  <p id="demo"></p>

</template>


<script>

export default {
  methods: {
    Compteur() {
      var deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 25)

      var x = setInterval(function () {
        var now = new Date().getTime();
        var t = deadline - now;
     
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById("demo").innerHTML =  seconds + "s ";
        if (t < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);
    }
  }
}

</script>
