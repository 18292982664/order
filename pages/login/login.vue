<template>
	<view>
		<u-input v-model="uesrName" type="text" :border="border" />
		<u-input v-model="passWord" type="password" :border="border" />
		<u-button type="primary" @click="loginBtn">主要按钮</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			uesrName: '',
			passWord: '',
			border: true
		};
	},
	methods: {
		loginBtn() {
			//   15021234317
			if (this.uesrName == '') {
				this.$showToast('用户名不能为空');
				return;
			} else if (this.passWord == '') {
				this.$showToast('密码不能为空');
				return;
			}
			let param = {
				account: this.uesrName,
				password: this.passWord
			};
			this.$axios.login(param).then(res => {
				let data = res.data.token;
				uni.setStorageSync('token', data);
				uni.switchTab({
					url: '/pages/index/index'
				});
				this.$showToast('登录成功');
			});
		}
	}
};
</script>

<style></style>
