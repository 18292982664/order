
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/order/order","pages/car/car","pages/my/my","pages/login/login"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"蒙古大战","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#FFFFFF","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#282B32","list":[{"pagePath":"pages/index/index","iconPath":"static/tabBar/dishes.png","selectedIconPath":"static/tabBar/dishes-hover.png","text":"菜品"},{"pagePath":"pages/order/order","iconPath":"static/tabBar/order.png","selectedIconPath":"static/tabBar/order-hover.png","text":"订单"},{"pagePath":"pages/car/car","iconPath":"static/tabBar/car.png","selectedIconPath":"static/tabBar/car-hover.png","text":"购物车"},{"pagePath":"pages/my/my","iconPath":"static/tabBar/mine.png","selectedIconPath":"static/tabBar/mine-hover.png","text":"我的"},{"pagePath":"pages/login/login","iconPath":"static/tabBar/mine.png","selectedIconPath":"static/tabBar/mine-hover.png","text":"登录"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"order","compilerVersion":"2.9.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"菜品"}},{"path":"/pages/order/order","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"订单"}},{"path":"/pages/car/car","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/login/login","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"登录"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
