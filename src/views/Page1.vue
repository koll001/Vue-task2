<template>
  <div class="main">
    <div class="container">
      <span class="tag is-info">STEP1</span>
      <div class="block">
        <i class="fas fa-address-card"></i>
        <h2>お客様の情報を入力してください</h2>
      </div>
      <div class="asks">
        <div class="control">
          <p>-性別-</p>
          <label class="radio">
            <input type="radio" name="answer" />
            男性
          </label>
          <label class="radio">
            <input type="radio" name="answer" />
            女性
          </label>
        </div>
        <p>-生年月日-</p>
        <div class="select">
          <select id="year" v-model="year">
            <option
              v-for="nengo in nengoes"
              :key="nengo.year"
              :value="nengo.year"
              >{{ nengo.label }}</option
            >
          </select>
          <label>年</label>
        </div>
        <div class="select">
          <select id="month" class="list" v-model="month">
            <option v-for="(month, index) in months" :key="index">{{
              month
            }}</option>
          </select>
          <label>月</label>
        </div>
        <div class="select">
          <select id="days" class="list" v-model="day">
            <option v-for="day in days" :key="day">{{ day }}</option>
          </select>
          <label>日</label>
        </div>
      </div>
    </div>
    <div class="button-content">
      <router-link to="/page2" tag="button" class="button is-primary"
        >次へ進む</router-link
      >
    </div>
  </div>
</template>

<script>
import {
  genereateYears,
  generateMonths,
  generateDays,
} from '../components/helpers/definition.js';

export default {
  data() {
    return {
      year: 2000,
      month: 1,
      day: 1,
      nengoes: [],
      months: [],
    };
  },
  mounted() {
    this.nengoes = genereateYears();
    this.months = generateMonths();
  },
  computed: {
    genereateYears,
    generateMonths,
    generateDays,
    days: function() {
      return generateDays(this.year, this.month);
    },
  },
};
</script>

<style>
.main {
  width: 50%;
  height: 600px;
  margin: 0 auto;
}

.tag {
  position: absolute;
}

.container {
  margin-top: 10%;
  border: solid 1px lightskyblue;
  width: 100%;
  height: 40%;
  border-radius: 5px;
}

.block {
  background-color: rgba(135, 206, 250, 0.2);
  border-bottom: solid 1px lightskyblue;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}

.block h2 {
  display: inline;
}

.asks {
  margin-left: 20px;
  margin-bottom: 20px;
}

.asks p {
  color: rgb(1, 104, 173);
  margin: 10px 0px;
}

.select select {
  display: inline;
}

.list {
  margin-left: 30px;
}

.select label {
  margin-left: 5px;
  position: absolute;
  top: 10px;
}
</style>
