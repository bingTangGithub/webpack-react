import domainData from './domainData.jsx';

export default class BaiduUtil {
  static genStatistics(domain) {
    return BaiduUtil.getHashId(domain, (hashId) => {
      var _hmt = _hmt || [];
      let hm = document.createElement("script");
      hm.src = `https://hm.baidu.com/hm.js?${hashId}`;
      let s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    });
         
  }

  static getHashId(domain, callback) {
    let domainBoolean = false;

    for (let key in domainData) {
      if (domain.indexOf(key) != -1) {
        domain = key;
        domainBoolean = true;
        break;
      }
    }

    if (!domainBoolean) {
      throw new Error(`Domain ${domain} not reconized`);
    }

    callback && callback(domainData[domain]);
    return domainData[domain];
  }
    
}


