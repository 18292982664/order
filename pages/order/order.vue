<template>
	<view class="order">
		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="center-box">
			<view class="center-item" v-for="(item,index) in listGoods" :key="index" @click="goodsDetails(index)">
				<view class="center-item-item">
					<view class="item table-number">桌号：{{item.place}}</view>
					<view class="flex-both-sides item order-time">
						<view class="main order">订单号：<span>{{item.cartNo}}</span></view>
						<view class="main num">数量：<span>{{item.goodsCount}}</span></view>
					</view>
					<view class="flex-both-sides item amount-of-money">
						<view class="main time">下单时间：<span>{{item.updateTime}}</span></view>
						<view class="main price">金额：<span>{{item.totalPrice}}</span></view>
					</view>
					<view class="flex-center item btn-box">
						<view class="add" @click.stop="add">加菜</view>
						<view class="check-out" @click.stop="checkOut">结账</view>
					</view>
				</view>
			</view>
		</view>
		<u-popup v-model="popupShow" mode="center" length="80%">
			<view>
				<view class="flex-average title-nav">
					<view>名称</view>
					<view>数量</view>
					<view>单价</view>
				</view>
				<view class="payment-details">
					<!-- <view v-for="item in paymentDetails">
						<view class="">{{item.productName}}</view>
						<view class="">{{item.price}}</view>
						<view class="">{{item.number}}</view>
					</view -->
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				popupShow: false,
				list: [{
					name: '未结账'
				}, {
					name: '待支付'
				}, {
					name: '已完成',
					count: 5
				}],
				listGoods: [{
					place: "26",
					cartNo: '39_20201021_3737373744',
					updateTime: "1603245340000",
					totalPrice: "1450",
					goodsCount: 6
				}, {
					place: "26",
					cartNo: '39_20201021_3737373744',
					updateTime: "1603245340000",
					totalPrice: "1450",
					goodsCount: 6
				}]
			};
		},
		onLoad() {
			
		},
		methods: {
			change(index) {
				this.current = index;
			},
			//详情
			goodsDetails(index) {
				console.log(index)
			},
			add() {
				console.log("加菜")
			},
			checkOut() {
				this.popupShow = true;
				console.log("结账")
			}
		}
	};
</script>

<style lang="scss">
	.order {
		.center-box {
			.center-item {
				padding: 10rpx 16rpx;
			}

			.center-item-item {
				background: #f5f5f5;
				padding: 20rpx 30rpx;
				border-radius: 20rpx;

				.main {
					color: $uni-text-color-inverse;

					span {
						color: $uni-text-color;
					}
				}

				.btn-box {
					.add {
						background: $uni-bg-color-add;
						color: $uni-text-color-white;
						font-size: $uni-font-size-lg;
						padding: 10rpx 30rpx;
						border-radius: 26rpx;
						margin-right: 15rpx;
					}

					.check-out {
						background-color: $uni-bg-color-mask;
						color: $uni-text-color-white;
						font-size: $uni-font-size-lg;
						padding: 10rpx 30rpx;
						border-radius: 26rpx;
						margin-left: 15rpx;
					}
				}

				.item {
					padding-top: 16rpx;

				}
			}
		}
	}
</style>
