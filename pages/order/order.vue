<template>
	<view class="order">
		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="center-box">
			<view class="center-item" v-for="(item, index) in listGoods" :key="index" @click="goodsDetails(index)">
				<view class="center-item-item">
					<view class="item table-number">桌号：{{ item.place }}</view>
					<view class="flex-both-sides item order-time">
						<view class="main order">
							订单号：
							<span>{{ item.cartNo }}</span>
						</view>
						<view class="main num">
							数量：
							<span>{{ item.goodsCount }}</span>
						</view>
					</view>
					<view class="flex-both-sides item amount-of-money">
						<view class="main time">
							下单时间：
							<span>{{ item.updateTime }}</span>
						</view>
						<view class="main price">
							金额：
							<span>{{ item.totalPrice }}</span>
						</view>
					</view>
					<view class="flex-center item btn-box" v-if="item.state != 2">
						<view class="add" @click.stop="add(index)">加菜</view>
						<view class="check-out" @click.stop="checkOut(index)">结账</view>
					</view>
				</view>
			</view>
		</view>
		<u-popup v-model="popupShow" mode="center" length="90%" height="800rpx" :closeable="true" :border-radius="26" @close="closeHidden">
			<view class="show-box">
				<view class="display-code">
					<view class="code-title">扫码支付</view>
					<canvas class="code" canvas-id="couponQrcode"></canvas>
					<view class="realPrice">
						总金额￥
						<text class="price">{{ realPrice }}</text>
					</view>
				</view>
				<view class="payment-box">
					<view class="flex-average title-nav">
						<view class="unite title">名称</view>
						<view class="unite num">数量</view>
						<view class="unite unit-price">单价</view>
					</view>
					<view class="flex-average title-nav" v-for="(itemDeta, index) in paymentDetails" :key="index">
						<view class="unite title">{{ itemDeta.productName }}</view>
						<view class="unite unit-price">{{ itemDeta.number }}</view>
						<view class="unite num">￥{{ itemDeta.price }}</view>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
import qrCode from '../../utils/qrcode.js';
// import QRCode from 'qrcodejs2'
export default {
	data() {
		return {
			current: 0,
			popupShow: false,
			realPrice: null,
			Timer: null,
			state: 0,
			list: [
				{
					name: '未结账'
				},
				{
					name: '待支付'
				},
				{
					name: '已完成'
				}
			],
			listGoods: [],
			paymentDetails: []
		};
	},
	onLoad() {
		this.queryProductChart();
	},
	computed: {},
	methods: {
		change(index) {
			this.current = index;
			this.queryProductChart();
		},
		// 订单列表
		queryProductChart() {
			let params = {
				state: this.current,
				pageSize: 100
			};
			this.$axios.queryProductChart(params).then(res => {
				console.log('订单列表', res);
				this.listGoods = res.data.records;
			});
		},
		//详情
		goodsDetails(index) {
			console.log(index);
		},
		add() {
			console.log('加菜');
		},
		//结账
		checkOut(index) {
			let that = this;
			this.popupShow = true;
			let goodCartNo = this.listGoods[index];
			let params = {
				cartNo: goodCartNo.cartNo,
				realPrice: goodCartNo.realPrice
			};
			console.log('结账');
			this.$axios.unifiedorder(params).then(res => {
				this.paymentDetails = res.data.products;
				this.realPrice = res.data.realPrice;
				let codeUrl = res.data.qrUrl;
				new qrCode('couponQrcode', {
					text: codeUrl,
					width: 150,
					height: 150,
					colorDark: '#333333',
					colorLight: '#FFFFFF',
					correctLevel: qrCode.CorrectLevel.H
				});
				clearInterval(this.Timer);
				this.Timer = setInterval(() => {
					this.getChartState(index);
				}, 1000);
			});
		},
		//支付状态
		getChartState(index) {
			let that = this;
			let cartNo = this.listGoods[index].cartNo;
			let params = {
				cartNo
			};
			console.log('订单状态');
			that.$axios.getChartState(params).then(res => {
				if (res.data.state == 2) {
					clearInterval(this.Timer);
					this.popupShow = false;
					this.change(2);
				}
				console.log('状态', res);
			});
		},
		//关闭定时器
		closeHidden() {
			clearInterval(this.Timer);
			if (this.state == 1) {
				this.change(1);
				this.popupShow = false;
			}
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
