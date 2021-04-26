// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: null,
  },
  actHandler(evt) {
    console.log(evt);
    const userInfo = app.getUserInfo();
    this.setData({
      userInfo
    });
  },
  act2Handler() {
    app.authed().then(() => {
      this.actHandler();
    });
  },
  logoff() {
    app.logoff().then(() => {
      this.actHandler();
    });
  }
})
