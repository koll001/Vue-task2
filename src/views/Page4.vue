<template>
  <div class="main">
    <div class="container">
      <span class="tag is-info">STEP1</span>
      <div class="block">
        <i class="fas fa-file-alt"></i>
        <h2>以下の内容をご確認ください</h2>
      </div>
      <div class="asks">
        <div class="control">
          <p>-性別-</p>
          <div class="remind">{{ $store.state.sex }}</div>
        </div>
        <div class="control">
          <p>-生年月日-</p>
          <div class="remind">
            {{
              `${$store.state.year}年${$store.state.month}月${$store.state.day}日`
            }}
          </div>
        </div>
        <div class="control">
          <p>-現在、生命保険に加入されていますか？-</p>
          <div class="remind">{{ $store.state.ask1 }}</div>
        </div>
        <div class="control">
          <p>
            -現在、入院中ですか。または、最近３ヵ月以内に医師の診療・検査の結果、入院・手術をすすめられたことはありますか？
          </p>
          <div class="remind">{{ $store.state.ask2 }}</div>
        </div>
        <div class="control">
          <p>
            -過去、５年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
          </p>
          <div class="remind">{{ $store.state.ask3 }}</div>
        </div>
        <div class="control">
          <p>-ご相談内容-</p>
          <div class="remind">{{ $store.state.inputContents }}</div>
        </div>
      </div>
    </div>
    <div class="button-content">
      <div class="buttons">
        <router-link to="/page3" tag="button" class="button is-primary"
          >前へ戻る</router-link
        >
      </div>
      <div class="buttons">
        <router-link to="/" tag="button" class="button is-primary"
          >送信</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

.remind {
  margin-top: 20px;
  margin-left: 20px;
}
</style>
