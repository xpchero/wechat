// app.js
var agconnect = require('@agconnect/api');
require('@agconnect/instance');
var agConnectConfig = {
    "agcgw": {
        "backurl": "connect-drcn.hispace.hicloud.com",
        "url": "connect-drcn.dbankcloud.cn",
        "websocketbackurl": "connect-ws-drcn.hispace.dbankcloud.com",
        "websocketurl": "connect-ws-drcn.hispace.dbankcloud.cn"
    },
    "agcgw_all": {
        "CN": "connect-drcn.dbankcloud.cn",
        "CN_back": "connect-drcn.hispace.hicloud.com",
        "DE": "connect-dre.dbankcloud.cn",
        "DE_back": "connect-dre.hispace.hicloud.com",
        "RU": "connect-drru.hispace.dbankcloud.ru",
        "RU_back": "connect-drru.hispace.dbankcloud.cn",
        "SG": "connect-dra.dbankcloud.cn",
        "SG_back": "connect-dra.hispace.hicloud.com"
    },
    "websocketgw_all": {
        "CN": "connect-ws-drcn.hispace.dbankcloud.cn",
        "CN_back": "connect-ws-drcn.hispace.dbankcloud.com",
        "DE": "connect-ws-dre.hispace.dbankcloud.cn",
        "DE_back": "connect-ws-dre.hispace.dbankcloud.com",
        "RU": "connect-ws-drru.hispace.dbankcloud.ru",
        "RU_back": "connect-ws-drru.hispace.dbankcloud.cn",
        "SG": "connect-ws-dra.hispace.dbankcloud.cn",
        "SG_back": "connect-ws-dra.hispace.dbankcloud.com"
    },
    "client": {
        "cp_id": "260086000249192386",
        "product_id": "460463478583338372",
        "client_id": "1092210518497709440",
        "client_secret": "829F27B11C40278EC4FC7ED95208655070F3BF470A111FDB209ADBB2BAC676EA",
        "project_id": "460463478583338372",
        "app_id": "244296531652390262",
        "api_key": "DAEDALeOxLYdtZCfDMe5eZoUQ4xHmE26L+0uwfv+6H6SBXkow9xIw51XYmHnVs8upNbn4V0KGF9tHKjP1yMwVOMie8nAaPYqeJlNDw=="
    },
    "oauth_client": {
        "client_id": "107713061",
        "client_type": 7
    },
    "app_info": {
        "app_id": "244296531652390262"
    },
    "service": {
        "analytics": {
            "collector_url": "datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn",
            "collector_url_ru": "datacollector-drru.dt.dbankcloud.ru,datacollector-drru.dt.hicloud.com",
            "collector_url_sg": "datacollector-dra.dt.hicloud.com,datacollector-dra.dt.dbankcloud.cn",
            "collector_url_de": "datacollector-dre.dt.hicloud.com,datacollector-dre.dt.dbankcloud.cn",
            "collector_url_cn": "datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn",
            "resource_id": "p1",
            "channel_id": ""
        },
        "edukit": {
            "edu_url": "edukit.edu.cloud.huawei.com.cn",
            "dh_url": "edukit.edu.cloud.huawei.com.cn"
        },
        "search": {
            "url": "https://search-drcn.cloud.huawei.com"
        },
        "cloudstorage": {
            "storage_url_sg_back": "https://agc-storage-dra.cloud.huawei.asia",
            "storage_url_ru_back": "https://agc-storage-drru.cloud.huawei.ru",
            "storage_url_ru": "https://agc-storage-drru.cloud.huawei.ru",
            "storage_url_de_back": "https://agc-storage-dre.cloud.huawei.eu",
            "storage_url_de": "https://ops-dre.agcstorage.link",
            "storage_url": "https://agc-storage-drcn.platform.dbankcloud.cn",
            "storage_url_sg": "https://ops-dra.agcstorage.link",
            "storage_url_cn_back": "https://agc-storage-drcn.cloud.huawei.com.cn",
            "storage_url_cn": "https://agc-storage-drcn.platform.dbankcloud.cn"
        },
        "ml": {
            "mlservice_url": "ml-api-drcn.ai.dbankcloud.com,ml-api-drcn.ai.dbankcloud.cn"
        }
    },
    "region": "CN",
    "configuration_version": "3.0"
}
App({
    onLaunch() {
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        //初始化AGC
        agconnect.instance().configInstance(agConnectConfig);
        console.log(agconnect.instance().config())
        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
    },
    globalData: {
        userInfo: null
    }
})
