<template>
	<div class="main">
		<div class="container">
			<span class="tag is-info">STEP1</span>
			<div class="block">
				<i class="fas fa-chalkboard-teacher"></i>
				<h2>以下にお答えください</h2>
			</div>
			<div class="asks">
				<div class="control">
					<p>-現在、生命保険に加入されていますか</p>
					<label class="radio">
						<input type="radio" value="male" name="ask1" v-model="ask1" />
						男性
					</label>
					<label class="radio">
						<input type="radio" value="female" name="ask1" v-model="ask1" />
						女性
					</label>
				</div>
				<transition name="fade">
					<div class="control" v-if="ask1">
						<p>
							-現在、入院中ですか。または、最近３ヵ月以内に医師の診療・検査の結果、入院・手術をすすめられたことはありますか？
						</p>
						<label class="radio">
							<input type="radio" value="yes" name="ask2" v-model="ask2" />
							はい
						</label>
						<label class="radio">
							<input type="radio" value="no" name="ask2" v-model="ask2" />
							いいえ
						</label>
					</div>
				</transition>
				<transition name="fade">
					<div class="control" v-if="ask2">
						<p>
							-過去、５年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
						</p>
						<label class="radio">
							<input type="radio" value="yes" name="ask3" v-model="ask3" />
							はい
						</label>
						<label class="radio">
							<input type="radio" value="no" name="ask3" v-model="ask3" />
							いいえ
						</label>
					</div>
				</transition>
			</div>
		</div>
		<div class="button-content">
			<div class="buttons">
				<router-link to="/" tag="button" class="button is-primary"
					>前へ戻る</router-link
				>
			</div>
			<div class="buttons">
				<router-link to="/page3" tag="button" class="button is-primary"
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
	width: 50%;
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

.fade-enter-active {
	transition: opacity 0.7s;
}

.fade-enter {
	opacity: 0;
}

.radio {
	margin-bottom: 15px;
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
</style>
