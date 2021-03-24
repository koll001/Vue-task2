<template>
  <div class="main">
    <div class="container">
      <span class="tag is-info">STEP1</span>
      <div class="block">
        <i class="fas fa-file-alt"></i>
        <h2>ご相談内容をご記入ください</h2>
      </div>
      <div class="asks">
        <div class="control">
          <p>-ご相談内容-</p>
          <textarea
            class="textarea"
            rows="10"
            cols="10"
            v-model="inputContents"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="button-content">
      <div class="buttons">
        <router-link to="/page2" tag="button" class="button is-primary"
          >前へ戻る</router-link
        >
      </div>
      <div class="buttons">
        <router-link to="/" tag="button" class="button is-primary"
          >次へ進む</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ask1: false,
      ask2: false,
      ask3: false,
    };
  },
};
</script>

<style>
.main {
  width: 60%;
  height: 70%;
  margin: 0 auto;
}

.tag {
  position: absolute;
}

.container {
  margin-top: 10%;
  border: solid 1px lightskyblue;
  width: 100%;
  height: 65%;
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
}

.asks p {
  color: rgb(1, 104, 173);
  margin-top: 10px;
}

.button-content {
  width: 100%;
  margin: auto;
  text-align: center;
  margin-top: 30px;
}

.buttons {
  margin-left: 30px;
  display: inline;
}

.control {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
