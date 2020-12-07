<script>
	export default {
		computed: {
			goodsNum() {
				let num = 0;
				let list = this.$store.state.goodsCar;
				list.map((v) => {
					num = v.number + v.number
				})
				return num
			}
		},
		onLaunch: function() {
			uni.setTabBarBadge({
				index: 2,
				text: this.goodsNum + ""
			})
			console.log('App Launch')
		},
		onLoad() {

		},
		onShow: function() {


		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";

	/**
 * 商品样式
 */
	.item-li {

		.pic {
			display: block;
			width: 100%;
			height: 200rpx;
		}



		.productName {
			color: $uni-text-color-grey;
			font-size: $uni-font-size-base;
		}

		.price {
			color: $uni-text-color-grey;
			font-size: $uni-font-size-base;

			.add-item-run {
				background-color: red;
				width: 40rpx;
				height: 40rpx;
				border-radius: 50%;
				text-align: center;
				line-height: 40rpx;
				font-size: 30rpx;
				color: $uni-text-color-white;
			}
		}

	}

	/**
	 * 公共全局样式
	 */

	.loading-center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.flex-left {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.flex-center {
		display: flex;
		justify-content: center;
		text-align: center;
	}

	.flex-average {
		display: flex;
		justify-content: center;
		justify-content: space-between;
	}

	//两边对齐
	.flex-both-sides {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
