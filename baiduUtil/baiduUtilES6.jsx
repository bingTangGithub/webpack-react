import fetch from 'isomorphic-fetch';

export default class BaiduUtil {
    static genStatistics(domain) {
        return BaiduUtil.getHashId(domain, (hashId) => {
            // if (hashId == null) {
            //     throw new Error(`Domain ${domain} not reconized`);
            // }
            var _hmt = _hmt || [];
            var hm = document.createElement("script");
            hm.src = `https://hm.baidu.com/hm.js?${hashId}`;
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
            return hm;
        });
         
    }

    static getHashId(domain, callback) {
        
        fetch('./domain.json')  // 向指定的URL发出请求
        .then(function(response) {   
            if (response.ok) {
                return response.json();   // 得到回应后，将其转为JSON格式
            } else {
                console.log('请求失败，状态码为：',response.status)
            }
        }, function(err) {
               console.log('出错：',err);
        })
        .then((jsonData) => {  //利用上个then转化为JSON格式的数据
            let domainGet = BaiduUtil.domainReconized(domain, jsonData);
            console.log('callback:', callback(domainGet));
            callback && callback(domainGet);

        });

    }

    static domainReconized (domain, domainHashMap) {
        let domainBoolean = false;

        for(var key in domainHashMap){
            if(domain.indexOf(key) != -1){
                domain = key;
                domainBoolean = true;
                break;
            }
        }

        if(!domainBoolean){
            throw new Error(`Domain ${domain} not reconized`);
        }

        return domainHashMap[domain];
    }
    
}


