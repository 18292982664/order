<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";

	/**
	 * 公共全局样式
	 */
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
	.flex-average{
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
