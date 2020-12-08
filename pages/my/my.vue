<template>
	<view>
		<u-input v-model="newPassword" type="password" :border="border" placeholder="请输入旧密码" />
		<u-input v-model="oldPassword" type="password" :border="border" placeholder="请输入新密码" />
		<u-input v-model="deterPassword" type="password" :border="border" placeholder="确认密码" />
		<u-button type="success" @click="determine">修改密码</u-button>
		<view @click="signOutBtn">退出登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newPassword: "",
				oldPassword: "",
				rePasssowrd: "",
				border: true
			};
		},
		methods: {
			determine() {
				let params = {
					newPassword: this.newPassword,
					oldPassword: this.oldPassword,
					rePasssowrd: this.rePasssowrd
				}
				this.$axios.modifyPassword(params).then((res) => {
					console.log(res)
				})
			},
			signOutBtn() {
				this.$axios.signOut().then(res => {
					uni.removeStorageSync('token');
					var token = uni.getStorageSync('token');
					console.log('my', token);
					uni.redirectTo({
						url: '/pages/login/login'
					});
					this.$showToast('退出登录');
				});
			}
		}
	};
</script>

<style></style>
