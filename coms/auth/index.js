// coms/auth/index.js
Component({
  properties: {
    zIndex: {
      type: Number,
      value: 10
    },
    successEventName: {
      type: String,
      value: 'tap'
    }
  },
  data: {
    visible: false,
  },
  methods: {
    authCheckHandler() {
      const app = getApp();
      app.authed().then(() => {
        // 授权成功触发成功回调
        this.successHandler();
      });
    },
    successHandler() {
      this.triggerEvent(this.data.successEventName, {}, {
        bubbles: true,
      });
    },
    closeHandler() {
      // 关闭授权弹窗
      this.setData({
        visible: false,
      });
    }
  },
})
