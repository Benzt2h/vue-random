import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    awards: [],
    result: "",
  },
  mutations: {
    initAwards(state, awards) {
      state.awards = awards;
    },
    checkAnswerd(state, text) {
      let last2 = text.substring(1, 3);
      if (text == state.awards[0].award1) {
        if (last2 == state.awards[0].awardLast2) {
          if (
            state.awards[0].award1Left != 0 &&
            state.awards[0].awardLast2Left != 0
          ) {
            state.awards[0].award1Left = state.awards[0].award1Left - 1;
            state.awards[0].awardLast2Left = state.awards[0].awardLast2Left - 1;
            state.result = `${text} ถูกรางวัลที่ 1 และรางวัลเลขทาย 2 ตัว`;
          } else if (state.awards[0].award1Left == 0) {
            if (state.awards[0].awardLast2Left != 0) {
              state.awards[0].awardLast2Left =
                state.awards[0].awardLast2Left - 1;
              state.result = `${text} รางวัลที่ 1 หมดแล้ว แต่ถูกรางวัลเลขทาย 2 ตัว`;
            } else {
              state.result = `${text} รางวัลที่ 1 หมดแล้วและรางวัลเลขทาย 2 ตัวหมดแล้ว`;
            }
          }
        } else {
          state.awards[0].award1Left = state.awards[0].award1Left - 1;
          state.result = `${text} ถูกรางวัลที่ 1`;
        }
      } else if (text == state.awards[0].award2) {
        if (last2 == state.awards[0].awardLast2) {
          if (
            state.awards[0].award2Left != 0 &&
            state.awards[0].awardLast2Left != 0
          ) {
            state.awards[0].award2Left = state.awards[0].award2Left - 1;
            state.awards[0].awardLast2Left = state.awards[0].awardLast2Left - 1;
            state.result = `${text} ถูกรางวัลที่ 2 และรางวัลเลขทาย 2 ตัว`;
          } else if (state.awards[0].award2Left == 0) {
            if (state.awards[0].awardLast2Left != 0) {
              state.awards[0].awardLast2Left =
                state.awards[0].awardLast2Left - 1;
              state.result = `${text} รางวัลที่ 2 หมดแล้ว แต่ถูกรางวัลเลขทาย 2 ตัว`;
            } else {
              state.result = `${text} รางวัลที่ 2 หมดแล้วและรางวัลเลขทาย 2 ตัวหมดแล้ว`;
            }
          }
        } else {
          state.awards[0].award2Left = state.awards[0].award2Left - 1;
          state.result = `${text} ถูกรางวัลที่ 2`;
        }
      } else if (text == state.awards[0].award1S1) {
        if (last2 == state.awards[0].awardLast2) {
          if (
            state.awards[0].award1S1Left != 0 &&
            state.awards[0].awardLast2Left != 0
          ) {
            state.awards[0].award1S1Left = state.awards[0].award1S1Left - 1;
            state.awards[0].awardLast2Left = state.awards[0].awardLast2Left - 1;
            state.result = `${text} ถูกรางวัลเลขข้างเคียงรางวลที่ 1 เลขที่ 1 และรางวัลเลขทาย 2 ตัว`;
          } else if (state.awards[0].award1S1Left == 0) {
            if (state.awards[0].awardLast2Left != 0) {
              state.awards[0].awardLast2Left =
                state.awards[0].awardLast2Left - 1;
              state.result = `${text} รางวัลเลขข้างเคียงรางวลที่ 1 เลขที่ 1 หมดแล้ว แต่ถูกรางวัลเลขทาย 2 ตัว`;
            } else {
              state.result = `${text} รางวัลเลขข้างเคียงรางวลที่ 1 เลขที่ 1 หมดแล้วและรางวัลเลขทาย 2 ตัวหมดแล้ว`;
            }
          }
        } else {
          state.awards[0].award1S1Left = state.awards[0].award1S1Left - 1;
          state.result = `${text} ถูกรางวัลเลขข้างเคียงรางวลที่ 1 เลขที่ 1`;
        }
      } else if (text == state.awards[0].award1S2) {
        if (last2 == state.awards[0].awardLast2) {
          if (
            state.awards[0].award1S2Left != 0 &&
            state.awards[0].awardLast2Left != 0
          ) {
            state.awards[0].award1S2Left = state.awards[0].award1S2Left - 1;
            state.awards[0].awardLast2Left = state.awards[0].awardLast2Left - 1;
            state.result = `${text} ถูกรางวัลเลขข้างเคียงรางวลที่ 1 เลขที่ 2 และรางวัลเลขทาย 2 ตัว`;
          } else if (state.awards[0].award1S2Left == 0) {
            if (state.awards[0].awardLast2Left != 0) {
              state.awards[0].awardLast2Left =
                state.awards[0].awardLast2Left - 1;
              state.result = `${text} รางวัลเลขข้างเคียงรางวลที่ 1 เลขที่ 2 หมดแล้ว แต่ถูกรางวัลเลขทาย 2 ตัว`;
            } else {
              state.result = `${text} รางวัลเลขข้างเคียงรางวลที่ 1 เลขที่ 2 หมดแล้วและรางวัลเลขทาย 2 ตัวหมดแล้ว`;
            }
          }
        } else {
          state.awards[0].award1S2Left = state.awards[0].award1S2Left - 1;
          state.result = `${text} ถูกรางวัลเลขข้างเคียงรางวลที่ 1 เลขที่ 2`;
        }
      } else if (last2 == state.awards[0].awardLast2) {
        if (state.awards[0].awardLast2 != 0) {
          state.result = `${text} ถูกรางวัลเลขทาย 2 ตัว`;
        } else {
          state.result = `${text} รางวัลเลขทาย 2 ตัวหมดแล้ว`;
        }
      } else {
        state.result = `${text} ไม่ถูกรางวัลใดเลย`;
      }
      localStorage["awards"] = JSON.stringify(state.awards);
    },
    randomAward(state) {
      state.awards = [];
      let award1 = Math.floor(Math.random() * (999 - 100)) + 100;
      let award2 = Math.floor(Math.random() * (999 - 100)) + 100;
      while (award1 == award2) {
        award2 = Math.floor(Math.random() * (999 - 100)) + 100;
      }
      let award1S1 = award1;
      let award1S2 = award1;
      award1S1++;
      award1S2--;
      let awardLast2 = Math.floor(Math.random() * (99 - 1)) + 1;
      let awardLast2text = awardLast2;
      while (awardLast2 < 10) {
        awardLast2text = "0" + awardLast2;
        awardLast2 = 10;
      }
      state.awards.push({
        award1: award1,
        award1Left: 1,
        award2: award2,
        award2Left: 3,
        award1S1: award1S1,
        award1S1Left: 1,
        award1S2: award1S2,
        award1S2Left: 1,
        awardLast2: awardLast2text,
        awardLast2Left: 10,
      });
      localStorage["awards"] = JSON.stringify(state.awards);
    },
  },
  actions: {},
  modules: {},
});
