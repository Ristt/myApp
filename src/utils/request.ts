import Taro from '@tarojs/taro';

// 调用方法封装
const portableFetch = (option = {}) => {
  return Taro.request({
    ...option,
    header: {
      'content-type': 'application/json; charset=utf-8',
      //   cookie: wx.getStorageSync('sessionid'),
    },
  }).then(result => {
    if (result && result.header && result.header['Set-Cookie']) {
      wx.setStorageSync('sessionid', result.header['Set-Cookie']);
    }

    return { ...result.data };
  });
};
export default portableFetch;
