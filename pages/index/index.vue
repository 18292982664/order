<template>
	<view class="content">
		<u-tabs :list="list" :is-scroll="true" :current="current" @change="change"></u-tabs>
		<view class="text-area">
			neur
		</view>
	</view>
</template>

<script>
	// 15021234317
	export default {
		data() {
			return {
				list: [{
					name: '待收货'
				}, {
					name: '待付款'
				}, {
					name: '待评价',
				}, {
					name: '待付款'
				}, {
					name: '待评价',
				}, {
					name: '待付款'
				}, {
					name: '待评价',
				}, {
					name: '待付款'
				}, {
					name: '待评价',
				}, {
					name: '待付款'
				}, {
					name: '待评价',
				}],
				current: 0
			};
		},
		onLoad() {},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	};
</script>

<style lang="scss">
	.title {
		color: $uni-color-primary;
	}
</style>
