import { ArrayUtil } from '@xinguang/common-tool';
/**
 * This class is used for defining tool methods such as isType, deepClone, flatten, etc...
 */

export default class Util {
  static deepClone (obj) {
    if (obj === null || typeof obj !== 'object') return obj;

    let ret = new obj.constructor();

    if (ArrayUtil.isArray(obj)) {
      ret = [];
      for (let i = 0, l = obj.length; i < l; i++) {
        ret[i] = Util.deepClone(obj[i]);
      }
    } else {
      if (obj instanceof Date) {
        return new Date(obj.valueOf());
      }

      if (obj instanceof RegExp) {
        let pattern = obj.valueOf();
        let flags = '';
        flags += pattern.global ? 'g' : '';
        flags += pattern.ignoreCase ? 'i' : '';
        flags += pattern.multiline ? 'm' : '';
        return new RegExp(pattern.source, flags);
      }

      if (obj instanceof Function) {
        // 函数的话直接指向相对的内存地址
        return obj;
      }

      for (let attr in obj) {
        if (Object.hasOwnProperty.call(obj, attr)) {
          ret[attr] = Util.deepClone(obj[attr]);
        }
      }
    }
    return ret;
  }
}
