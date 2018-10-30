/*
* 模拟后台数据
* */


import Mock from 'mockjs'
import MsiteData from './data/datahome.json'
import ClassifyData from './data/datafenlei.json'
import ThingsData from './data/datashiwu.json'

Mock.mock('/msitedata', {
  code: 0,
  data: MsiteData
});
Mock.mock('/classifydata', {
  code: 0,
  data: ClassifyData
});
Mock.mock('/thingsdata', {
  code: 0,
  data: ThingsData
});

