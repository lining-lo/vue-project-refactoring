import Mock from 'mockjs'
import getHomeApi from './mockData/home.js'

Mock.mock('/home/getHomeData',getHomeApi.getHomeData)