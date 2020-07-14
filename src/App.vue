<template>
  <div id="app">
    <div class="container  ">
      <div class="row align-items-center">
        <div class="col">
          <AwardTable :awards="awards" @onRandom="random" />
        </div>
        <div class="col ">
          <CheckAnswer @onCheckAnswer="checkAnswer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AwardTable from "./components/AwardTable.vue";
import CheckAnswer from "./components/CheckAnswer.vue";
import alertify from "alertifyjs/build/alertify.min.js";
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    AwardTable,
    CheckAnswer,
  },
  created() {
    if (localStorage["awards"] == null) {
      this.randomAward();
      this.initAwards(JSON.parse(localStorage["awards"]));
    } else {
      this.initAwards(JSON.parse(localStorage["awards"]));
    }
  },
  methods: {
    ...mapMutations(["randomAward", "initAwards", "checkAnswerd"]),
    random() {
      this.randomAward();
    },
    checkAnswer(text) {
      this.checkAnswerd(text);
      alertify.alert("ผลการตรวจรางวัล", `${this.result}`);
    },
  },
  computed: {
    ...mapState(["awards", "result"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
