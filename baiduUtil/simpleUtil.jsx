
export default function  (web) {
    var web = web; 
    var domainId;  
    var idname = [
                    {
                        domain: 'bingtanggithub.github.io',
                        id: '013eeddbba92797f0529dcc066d91a44'
                    }, //我的博客
                    {
                        domain: 'user.qzone.qq.com/1569025161/infocenter',
                        id: '593440c1b190e9b67f240ce3e1ee537c'
                    }, //qq空间
                    {
                        domain: 'sjyx.xinguang.com',
                        id: '9bb005298bfaa0db19d6b3e84688da74'
                    } //四季严选
                ];

    for (let i=0; i<idname.length; i++) {
            if (web.indexOf(idname[i].domain) != -1) {
                domainId = idname[i].id;
            }
    }
    return domainId;
}



// export default  class BaiduUtil {
//     static genStatistics(domain) {
//         BaiduUtil.getHashId(domain, (hashId) => {
//             if (hashId == null) {
//                 throw new Error(`Domain ${domain} not reconized`);
//             }

//             var _hmt = _hmt || [];
//             var hm = document.createElement("script");
//             hm.src = `https://hm.baidu.com/hm.js?${hashId}`;
//             var s = document.getElementsByTagName("script")[0]; 
//             s.parentNode.insertBefore(hm, s);
//             console.log('hashId:',hashId);
//         });
//     }

//     static getHashId(domain, callback) {
//         let domainBoolean = false;
//         const domainHashMap = { 
//             "bingtanggithub.github.io": "34768c7d19ded3468fdbe770ecddf230",
//             "user.qzone.qq.com/1569025161/infocenter": "593440c1b190e9b67f240ce3e1ee537c",
//             "sjyx.xinguang.com": "9bb005298bfaa0db19d6b3e84688da74",
//         };

//         // fetch(url).then((domainHashMap) => {
//         //     callback && callback(domainHashMap[domain]);
//         // });

//         callback && callback(domainHashMap[domain]);
            
//     }

// }
