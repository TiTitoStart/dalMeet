export default {
  /** 
   * 获取localStorage的值
   * @param {存储对象名} objName
   * @param {对象属性} name
  **/
 get(objName, name) {
    let obj = JSON.parse(window.localStorage.getItem(objName));
    if(obj) {
      return name?obj[name] : obj;
    }
    else {
      return undefined;
    }
 },

/** 
   * 设置localStorage的值
   * @param {存储对象名} objName
   * @param {对象属性} name
  **/
 set(objName, value) {
  window.localStorage.setItem(objName, JSON.stringify(value));
},

/** 
   * 清除localStorage的值
   * @param {存储对象名} objName
   * @param {对象属性} name
  **/
 remove(objName) {
    window.localStorage.removeItem(objName);
  }
};
