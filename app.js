// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  /**
   * 判断是否登录
   */
  checkAuth() {
    return new Promise((resolve, reject) => {
      const userInfo = this.getUserInfo();
      userInfo ? resolve(userInfo) : reject('未登录');
    });
  },
  getUserInfo() {
    return this.globalData.userInfo;
  },
  /**
   * 退出登录
   */
  logoff() {
    return new Promise((resolve) => {
      this.globalData.userInfo = null;
      resolve();
    });
  },
  /**
   * 保证一定是登录的状态
   */
  authed() {
    return this.checkAuth().catch(() => {
      return this.auth();
    });
  },
  /**
   * 授权登录
   */
  auth() {
    return new Promise((resolve, reject) => {
      wx.getUserProfile({
        desc: '授权登录',
        success: resolve,
        fail: reject,
      })
    }).then(({ userInfo }) => {
      this.globalData.userInfo = userInfo;
    });
  },
  globalData: {
    userInfo: null
  }
});
