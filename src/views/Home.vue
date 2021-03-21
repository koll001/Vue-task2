<template>
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
				<select id="year">
					<option
						v-for="nengo in nengoes"
						:key="nengo.year"
						:value="nengo.year"
						>{{ nengo.label }}</option
					>
				</select>
				<label>年</label>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			year: 2000,
			month: 1,
			date: 1,
			nengoes: [],
		};
	},
	mounted() {
		this.nengoes = this.genereate();
	},
	methods: {
		genereate() {
			const nengoes = [];
			for (let y = 2021; y > 1920; y--) {
				if (y > 2018) {
					nengoes.push({ year: y, label: `${y} (令和${y - 2018})` });
				} else if (y > 1988) {
					nengoes.push({ year: y, label: `${y} (平成${y - 1988})` });
				} else if (y > 1925) {
					nengoes.push({ year: y, label: `${y} (昭和${y - 1925})` });
				} else if (y > 1911) {
					nengoes.push({ year: y, label: `${y} (大正${y - 1911})` });
				}
			}
			return nengoes;
		},
	},
};
</script>

<style>
.tag {
	position: absolute;
}

.container {
	margin-top: 10%;
	border: solid 1px lightskyblue;
	width: 50%;
	height: 50%;
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
	margin: 10px 0px;
}

.select select {
	display: inline;
}

.select label {
	margin-left: 5px;
}
</style>
