import axios from 'axios';
import { Message } from 'element-ui';
import Cookies from 'js-cookie'
import qs from 'qs'
import base from './base'//引用
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';


//http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = Cookies.get("setTokens");//注意使用的时候需要引入cookie方法，推荐js-cookie
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'xtoken': token,
    }
    if (token) {
      config.params = { 'token': token }
    }
    return config;
    
  },
  
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.errCode == 2) {
      router.push({
        path: "/login",
        query: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
      })
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        if (response.data.status == 0 && response.data.error_code == 2002) {
          this.getToken();
          // this.text1();
        }
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        let address = Cookies.get("address");
        if (address == '' || typeof(address) == "undefined"){
          getData(this);
        } else if (response.data.status == 0 && response.data.error_code == 2002) {
          //tODO 签名
          // this.getToken();
        }
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

async function getData(that){
  console.log("11111")
  //ethereum.request({ method: 'eth_requestAccounts' });
    // ethereum.request({ method: "eth_requestAccounts" });
    await ethereum
      .request({
        method: "eth_requestAccounts"
      })
      .then(that.setAddressCookie);
      //Cookies.set("address", )
    //return;
    // console.log("account1", account);
    // this.getMetaMaskData(account);
}

/**
 * set address cookie
 * @param {*} account 
 */
// function setAddressCookie(account)
// {
//   //this.useraddress = account[0];
//   Cookies.set("address",account[0])
// }




/**
* 封装patch请求
* @param url
* @param data
* @returns {Promise}
*/

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}