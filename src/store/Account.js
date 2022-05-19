import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//创建数据
const Store = new Vuex.Store({
    //数据
    state : {
        //账号
        account : null,
        //网络ID
        netWorkId : null,
    },
    //更新方法
    mutations : {
        //设置账号
        updateAccount(state, account)
        {
            if (state.account != account) {
                state.account = account;
            }
        },
        //网络ID
        updateNetId(state, netId)
        {
            if (state.netWorkId != netId) {
                state.netWorkId = netId;
            }
        },
    },

    //获取方法
    getters : {
        //是否登录
        isConntent (state) {
            if (!state.account || !state.netWorkId) {
                return false;
            }
            return true;
        }
    },
});

export default Store;