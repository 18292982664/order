<script>
	export default {
		data() {
			return {
				Tiemr: null
			};
		},
		computed: {
			goodsNum() {
				let num = 0;
				let list = this.$store.state.goodsCar;
				list.map(v => {
					num += v.number;
				});
				return num;
			}
		},
		onLaunch: function() {
			clearInterval(this.Tiemr);
			this.Tiemr = setInterval(() => {
				if (this.goodsNum != 0) {
					uni.setTabBarBadge({
						index: 2,
						text: this.goodsNum + ''
					});
				} else if (this.goodsNum == 0) {
					uni.hideTabBarRedDot({
						index: 2
					})
				}
			}, 200);
		},
		onLoad() {},
		onShow: function() {
			console.log('进来加载show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style lang="scss">
	@import 'uview-ui/index.scss';

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
 * 支付弹出层
 */
	.show-box {
		.display-code {
			text-align: center;
			padding-bottom: 25rpx;

			.code-title {
				padding: 10rpx 0;
				font-size: $uni-font-size-lg;
				color: $uni-text-color-blue;
				font-weight: bold;
			}

			.code {
				width: 250rpx;
				height: 250rpx;
				margin: 0 auto;
			}

			.realPrice {
				color: $uni-text-color-grey;
				font-size: $uni-font-size-sm;

				.price {
					font-size: $uni-font-size-base;
					color: $uni-text-color-blue;
					font-weight: bold;
				}
			}
		}

		.payment-box {
			height: calc(100% - 300rpx);

			.title-nav {
				text-align: center;

				&:first-child .unite {
					font-weight: 700;
					padding-bottom: 16rpx;
				}

				.unite {
					font-size: $uni-font-size-base;
					color: $uni-text-color-grey;
					padding-bottom: 10rpx;
					width: 33.33%;
				}

				// .title {
				// 	width: 33.33%;
				// }
				// .num {
				// 	width: 33.33%;
				// }
				// .unit-price {
				// 	width: 33.33%;
				// }
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
		text-align: center;

		.Loading {
			display: inline-block;
			width: 120rpx;

		}
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
