const app = getApp()

var agconnect = require('@agconnect/api');
require('@agconnect/instance');
require('@agconnect/function');

Page({
    data: {
        inputValue: "",
        chatList:[],
        userInfo:{}
    },

    onLoad() {
        wx.showLoading({
            title: '加载中',
          })
        wx.getUserProfile({
            desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
              console.log(res)
              this.setData({
                userInfo: res.userInfo
              })
              setTimeout(function () {
                wx.hideLoading()
              }, 1000)
            }
          })
        let functionCallable = agconnect.function().wrap("talker-$latest");
        functionCallable.timeout = 50000;
        this.setData({
            functionCallable: functionCallable
        })
    },

    // 功能：当我们发布消息的时候，更新我们的数据库表中的消息
    // 思路：1.首先根据页面接收到的值，获取这条消息的_id
    //      2.新建一个空白数组，将我们需要记录的信息、聊天内容放到这个数组中
    //      3.将这个数组放到我们存放聊天记录的record数组中
    //      4.更新我们的数据库表格
    //      5.更新之后，再次调用，使刚刚发送的消息出现
    //      6.将我们的评论和输入消息内筒赋值为空 

    publishChat() {
        if (this.data.inputValue === undefined || this.data.inputValue === null || this.data.inputValue === "") {
            console.warn("nothing input")
            return;
        }
        this.data.chatList.push({
            //nickName:,
            //faceImg:
        })

        let that = this;
        if (this.data.functionCallable) {
            this.data.functionCallable.call({
                prompt: this.data.inputValue
            }).then(res => {
                let returnValue = res.getValue();
                that.setData({
                    openAiResponse: JSON.parse(returnValue.data)[0].text
                })
                console.log("res: "+ JSON.parse(returnValue.data)[0].text);
            })
        }
    },
    // 功能：获取输入框的值
    getInputValue(event) {
        this.data.inputValue = event.detail.value
    },
})
