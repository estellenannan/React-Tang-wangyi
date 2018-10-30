/*
*
* 多个请求接口
* */


import ajax from './ajax'

export const reqMsiteData = () => ajax('/msitedata');
export const reqClassifyData = () => ajax('/classifydata');
export const reqThingsData = () => ajax('/thingsdata');



