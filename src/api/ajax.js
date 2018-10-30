/*
* 利用axios封装ajax请求函数
* */
/*
* ajax请求函数模块
返回值: promise对象(异步返回的数据是: response.data)
URL:请求地址 data:请求体 type:请求方式
* */
import axios from 'axios';

export default function ajax(url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise;
    if (type === 'GET') {
      let queryString = '';
      Object.keys(data).forEach(key => {
        const value = data[key];
        queryString += key + '=' + value + '&'
      });
      if (queryString) {// username=tom&password=123&
        queryString = queryString.substring(0, queryString.length - 1);
        url += '?' + queryString;
      }
      // 发get请求
      promise = axios.get(url)
    } else {
      //发送post请求
      promise = axios.post(url,data);
    }
    promise.then(
      // 异步按成功后传递的数据不再是response, 而是response里的data
      response => resolve(response),
      error => reject(error)
    )
  })
}

