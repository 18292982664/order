<template>
	<view class="content">
		<view class="loading-center"><u-loading mode="flower" :show="isLoading" size="100"></u-loading></view>
		<template v-show="centerShow">
			<u-tabs :list="list" :is-scroll="true" :current="current" @change="change"></u-tabs>
			<view class="text-area">
				<view class="item-commodity" v-for="(item, index) in goods" :key="index">
					<view class="item-li">
						<template v-if="item.icon == null">
							<image class="pic" src="../../static/mr.jpg" mode=""></image>
						</template>
						<template v-else>
							<image class="pic" :src="item.icon" mode=""></image>
						</template>
						<view class="text-box">
							<view class="productName">{{ item.productName }}</view>
							<view class="flex-both-sides price">
								<view>{{ item.price }}</view>
								<view @click="addItem">+</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
// 15021234317
export default {
	data() {
		return {
			list: [],
			goods: [],
			current: 0,
			isLoading: true,
			centerShow:false
		};
	},

	onLoad() {
		this.initData();
	},
	methods: {
		change(index) {
			this.current = index;
			this.navBarContentFn(index);
		},
		initData() {
			this.$axios.tabNav().then(res => {
				let tabNavList = res.data;
				let index = this.current;
				tabNavList.unshift({
					id: '',
					name: '全部'
				});
				this.list = tabNavList;
				this.navBarContentFn(index);
			});
		},
		navBarContentFn(index) {
			let tabId = this.list[index].id;
			let params = { classifyId: tabId };
			this.$axios.navBarContent(params).then(res => {
				this.goods = res.data.records;
				setTimeout(() => {
					this.centerShow = true;
					this.isLoading = false;
				}, 10000);
			});
		},
		addItem() {}
	}
};
</script>

<style lang="scss">
.content {
	.text-area {
		overflow: hidden;
		.item-commodity {
			float: left;
			width: 33.33%;
			.item-li {
				padding: 0 20rpx;
			}
			.pic {
				display: block;
				width: 100%;
				height: 200rpx;
			}
			.text-box {
				height: 100rpx;
				.productName {
					color: $uni-text-color;
					font-size: $uni-font-size-base;
				}
				.price {
					color: $uni-text-color;
					font-size: $uni-font-size-base;
				}
			}
		}
	}
}
</style>
