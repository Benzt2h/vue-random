<template>
  <div id="award-table">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">รางวัล</th>
          <th scope="col">เลขที่ออก</th>
          <th scope="col">จำนวนรางวัลที่เหลือ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">รางวัลที่ 1</th>
          <td>{{ awards[0].award1 }}</td>
          <td>{{ awards[0].award1Left }}</td>
        </tr>
        <tr>
          <th scope="row">รางวัลที่ 2</th>
          <td>{{ awards[0].award2 }}</td>
          <td>{{ awards[0].award2Left }}</td>
        </tr>
        <tr>
          <th scope="row">รางวัลเลขข้างเคียงรางวลที่ 1 เลขที่ 1</th>
          <td>{{ awards[0].award1S1 }}</td>
          <td>{{ awards[0].award1S1Left }}</td>
        </tr>
        <tr>
          <th scope="row">รางวัลเลขข้างเคียงรางวลที่ 1 เลขที่ 2</th>
          <td>{{ awards[0].award1S2 }}</td>
          <td>{{ awards[0].award1S2Left }}</td>
        </tr>
        <tr>
          <th scope="row">รางวัลเลขทาย 2 ตัว</th>
          <td>{{ awards[0].awardLast2 }}</td>
          <td>{{ awards[0].awardLast2Left }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="random" class="btn btn-info">สุ่มรางวัล</button>
  </div>
</template>

<script>
export default {
  name: "AwardTable",
  props: {
    awards: {
      type: Array,
    },
  },
  methods: {
    random() {
      this.$emit("onRandom");
    },
  },
};
</script>

<style></style>
