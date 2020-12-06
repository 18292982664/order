import request from './config.js'
module.exports = {
    // 登录
    login(p){
        return request('/admin/login','GET',p);
    }
}