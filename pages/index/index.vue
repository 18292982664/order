<template>
	<view class="content">
		<view class="loading-center">
			<view class="Loading" v-show="isLoading">
				<u-loading mode="flower"  size="120"></u-loading>
			</view>
			<view  v-if="goodsList.length == 0">
				<u-empty text="所谓伊人，在水一方" mode="data"></u-empty>
			</view>
		</view>
		<template v-if="goodsList.length !== 0">
			<u-tabs :list="list" :is-scroll="true" :current="current" @change="change"></u-tabs>
			<view class="text-area">
				<view class="item-commodity" v-for="(item, index) in goodsList" :key="index">
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
								￥<text class="text">{{ item.price }}</text>
								<view class="add-item-run" @click="addItem(index)">+</view>
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
				goodsList: [],
				current: 0,
				isLoading: true,
				centerShow: false
			};
		},
		computed: {
			goodsCar() {
				return this.$store.state.goodsCar
			}
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
				let params = {
					classifyId: tabId
				};
				this.$axios.navBarContent(params).then(res => {
					this.goodsList = res.data.records;
					setTimeout(() => {
						this.centerShow = true;
						this.isLoading = false;
					}, 500);
				});
			},
			addItem(index) {
				let goods = this.goodsList[index];
				if (this.goodsList[index]) {
					this.$store.state.count++;
					let params = {
						price: goods.price,
						productId: goods.id,
						productName: goods.productName,
						icon: goods.icon,
						number: 1
					}
					let goodsItem = this.goodsCar.find((v) => v.productName == goods.productName);
					if (goodsItem) {
						goodsItem.number += 1;
					} else {
						this.$store.commit("shoppingCartData", params)
					}
					this.$showToast('加入购物车')
				}
			}
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

					.text-box {
						height: 100rpx;
						margin-top: 10rpx;
					}
				}


			}
		}
	}
</style>
