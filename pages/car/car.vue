<template>
	<view class="car">
		<view class="wrap">
			<u-row gutter="16" v-for="(item, index) in goodsCar" :key="index" class="item-li item-li-car">
				<u-col span="3">
					<view class="demo-layout bg-purple ">
						<template v-if="item.icon == null">
							<image class="pic" src="../../static/mr.jpg" mode=""></image>
						</template>
						<template v-else>
							<image class="pic" :src="item.icon" mode=""></image>
						</template>
					</view>
				</u-col>
				<u-col span="8" offset="1">
					<view class="demo-layout bg-purple-light">
						<u-row gutter="16" justify="start">
							<u-col span="8">
								<view class="demo-layout bg-purple productName">{{ item.productName }}</view>
							</u-col>
							<u-col span="4" offset="0">
								<view class="demo-layout bg-purple-light price">
									￥
									<text class="text">{{ item.price }}</text>
								</view>
							</u-col>
						</u-row>
						<u-row gutter="16" justify="center">
							<u-col span="8">
								<view class="demo-layout bg-purple">
									<text @click="reduce(index)">-</text>
									{{ item.number }}
									<text @click="add(index)">+</text>
								</view>
							</u-col>
							<u-col span="4" offset="0"><view class="demo-layout bg-purple-light">删除</view></u-col>
						</u-row>
						<u-row gutter="16" justify="center">
							<u-col span="12">
								<view class="demo-layout bg-purple"><u-input v-model="item.textName" type="text" :border="border" @click = "changeCount(item)" /></view>
							</u-col>
						</u-row>
					</view>
				</u-col>
			</u-row>
			<view class="flex-both-sides">
				<u-col span="8">
					<view class="demo-layout bg-purple">
						<view class="total-price">总金额：{{ total }}</view>
					</view>
				</u-col>
				<u-col span="4">
					<view class="demo-layout bg-purple-light"><u-button class="place-an-order" type="success" @click="placeRrder">下单</u-button></view>
				</u-col>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			textName: '',
			border: true
		};
	},
	computed: {
		goodsCar() {
			return this.$store.state.goodsCar;
		},
		total() {
			let num = 0;
			let list = this.$store.state.goodsCar;
			list.map(v => {
				num += v.price * v.number;
			});
			return num;
		}
	},
	onLoad() {},
	methods: {
		reduce(index) {
			let goods = this.goodsCar[index];
			goods.number--;
			if (goods.number < 1) {
				goods.number = 1;
				this.$showToast('数量最小为1');
			}
		},
		add(index) {
			let goods = this.goodsCar[index];
			goods.number++;
		},
		changeCount(item){
			this.goodsCar.textName = item.textName
			console.log(item)
		},
		placeRrder() {
			let params = {
				memo: '',
				place: '',
				products: this.goodsCar
			};
			console.log(params);
			this.$axios.addProductChart(params).then(res => {
				this.goodsCar.splice(0,this.goodsCar.length);
				uni.reLaunch({
				    url: '/pages/order/order'
				});
				console.log(res);
			});
		}
	}
};
</script>

<style lang="scss">
.car {
	padding: 0 20rpx 50rpx 20rpx;
	.wrap {
		.item-li-car {
			padding-top: 20rpx;
		}
		.pic {
			display: block;
			width: 200rpx;
			height: 200rpx;
		}
		.total-price{
			font-size:$uni-font-size-lg;
			color: $uni-text-color-blue;
		}
	}
}
</style>
