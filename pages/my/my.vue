<template>
	<view><u-button type="success" @click="signOutBtn">退出登录</u-button></view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
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
