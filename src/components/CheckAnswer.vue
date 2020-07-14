<template>
  <form @submit.prevent="onCheckAnswer()" id="check-answer">
    <div class="input-group mb-3">
      <input
        required
        pattern=".{3,3}"
        maxlength="3"
        v-model="inputText"
        type="text"
        class="form-control"
        placeholder="กรอกเลขที่ต้องการตรวจรางวัล"
        aria-label="กรอกเลขที่ต้องการตรวจรางวัล"
        aria-describedby="button-addon2"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          ตรวจ
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "CheckAnswer",
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    onCheckAnswer() {
      this.$emit("onCheckAnswer", this.inputText);
    },
  },
};
</script>

<style></style>
