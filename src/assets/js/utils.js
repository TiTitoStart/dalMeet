/*
 * @Author: wuhaiwei 
 * @Date: 2018-10-18 16:26:55 
 * @Last Modified by: wuhaiwei
 * @Last Modified time: 2018-10-24 12:25:00
 */
/**
 * 各种工具类函数
 */
export default {
  /**
   * 格式化时间
   * @param {时间格式} date
   * @param {格式化的格式 yyyy-MM-dd HH:mm:ss} fmt
   */
  formatDate(date, fmt) {
    date = new Date(date);
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? str : padLeftZero(str)
        );
      }
    }

    function padLeftZero(str) {
      return ('00' + str).substr(str.length);
    }

    return fmt;
  },

  /**
   * 从数组arr中删除指定元素val
   * @param {数组} arr
   * @param {*} val
   */
  removeByValue(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == val) {
        arr.splice(i, 1);
        break;
      }
    }
  },

  /**
   * 返回在数组中的索引位置
   * @param {数组} arr
   * @param {值} val
   */
  arrayIndexOf(arr, val) {
    let i = arr.length;
    while (i--) {
      if (arr[i] == val) {
        return i;
      }
    }
    return -1;
  },

   /**
   * 返回在数组对象中的索引位置
   * @param {数组} arr
   * @param {属性} attr
   * @param {值} val
   */
  arrayObjIndexOf(arr,attr,val) {
    let i = arr.length;
    while (i--) {
      if (arr[i][attr] == val) {
        return i;
      }
    }
    return -1;
  },
  

  /**
   * 判断左滑右滑
   * @param {当前x方向的值} currentX
   * @param {当前y方向的值} currentY
   * @param {上一个x方向的值} lastX
   * @param {上一个y方向的值} lastY
   */
  judgeDirection (currentX, currentY, lastX, lastY) {
    let tx = currentX - lastX
    let ty = currentY - lastY
    let arrow = ""
  
    if (Math.abs(tx) > Math.abs(ty)) {
      //左右方向滑动
      if (tx < 30)
      arrow = "left"
      else if (tx > 30)
      arrow = "right"
    }
    else {
      //上下方向滑动
      if (ty < 30)
      arrow = "up"
      else if (ty > 30)
      arrow = "down"
    }
    return arrow;
  }
};
