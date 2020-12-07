<template>
	<view class="car">
		<view class="wrap">
			<u-row gutter="16" v-for="(item,index) in goodsCar" :key="index" class="item-li">
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
								<view class="demo-layout bg-purple productName">{{item.productName}}</view>
							</u-col>
							<u-col span="4" offset="0">
								<view class="demo-layout bg-purple-light price">￥<text class="text">{{item.price}}</text></view>
							</u-col>
						</u-row>
						<u-row gutter="16" justify="center">
							<u-col span="8">
								<view class="demo-layout bg-purple">
									<text @click="reduce(index)">-</text> {{item.number}} <text @click="add(index)">+</text>
								</view>
							</u-col>
							<u-col span="4" offset="0">
								<view class="demo-layout bg-purple-light">删除</view>
							</u-col>
						</u-row>
						<u-row gutter="16" justify="center">
							<u-col span="12">
								<view class="demo-layout bg-purple">
									<u-input v-model="textName" type="text" :border="border" />
								</view>
							</u-col>
						</u-row>
					</view>
				</u-col>
				<!-- <u-col span="5">
						<view class="demo-layout bg-purple-dark">99</view>
					</u-col> -->
			</u-row>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				textName: "",
				border: true
			};
		},
		computed: {
			goodsCar() {
				return this.$store.state.goodsCar;
			}
		},
		onLoad() {
			
		},
		methods: {
			
			reduce(index){
				let goods = this.goodsCar[index];
				goods.number --
				if(goods.number < 1){
					goods.number = 1;
					this.$showToast("数量最小为1")
				}
			},
			add(index){
				let goods = this.goodsCar[index];
				goods.number ++
			}
		}
	};
</script>

<style lang="scss">
	.car {
		.wrap {
			.pic {
				display: block;
				width: 200rpx;
				height: 200rpx;
			}
		}
	}
</style>
