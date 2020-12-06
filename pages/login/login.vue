<template>
	<view>
		<u-input v-model="uesrName" type="text" :border="border" />
		<u-input v-model="passWord" type="password" :border="border" />
		<u-button type="primary" @click="login">主要按钮</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uesrName: '',
				passWord: '',
				border: true
			}
		},
		methods: {
			login() {
				//   15021234317 
				if (this.uesrName == "") {
					this.$showToast('用户名不能为空');
					return;
				} else if (this.passWord == "") {
					this.$showToast('密码不能为空');
					return;
				}
				let param = {
					account: this.uesrName,
					password: this.passWord
				}
				this.$axios.login(param).then(res => {
					uni.switchTab({
					    url: '/pages/index/index'
					});
					this.$showToast('登录成功');
					consolelog(res)
				});
			}
		}
	}
</script>

<style>
</style>
