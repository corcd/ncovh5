/**
 * @file some common functions
 * @since 1.0.3
 * @author whzcorcd <whzcorcd@gmail.com>
 */
export default {
  parseUrl: id => {
    return (
      decodeURIComponent(
        (new RegExp('[?|&]' + id + '=([^&;]+?)(&|#|;|$)').exec(
          location.href
          // eslint-disable-next-line no-sparse-arrays
        ) || [, ''])[1].replace(/\+/g, '%20')
      ) || null
    )
  },
  getUA: () => {
    const u = navigator.userAgent.toLowerCase()
    const json = {
      isAndroid: /Android|Linux|Adr/i.test(u),
      // Android
      isIos: /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(u),
      // ios
      isMobile: /Android|webOS|iPhone|iPod|BlackBerry/i.test(u),
      // 手机设备
      isUc: /ucweb/i.test(u),
      // UC浏览器
      isChrome: /chrome/i.test(u.substr(-33, 6)),
      // Chrome浏览器
      isFirefox: /firefox/i.test(u),
      // 火狐浏览器
      isOpera: /opera/i.test(u),
      // Opera浏览器
      isSafire: /safari/i.test(u) && !/chrome/.test(u),
      // safire浏览器
      is360: /360se/i.test(u),
      // 360浏览器
      isBaidu: /bidubrowser/i.test(u),
      // 百度浏览器
      isSougou: /metasr/i.test(u),
      // 搜狗浏览器
      isIE6: /msie 6.0/i.test(u),
      // IE6
      isIE7: /msie 7.0/i.test(u),
      // IE7
      isIE8: /msie 8.0/i.test(u),
      // IE8
      isIE9: /msie 9.0/i.test(u),
      // IE9
      isIE10: /msie 10.0/i.test(u),
      // IE10
      isIE11: /msie 11.0/i.test(u),
      // IE11
      isLB: /lbbrowser/i.test(u),
      // 猎豹浏览器
      isWx: /micromessenger/i.test(u),
      // 微信内置浏览器
      isQQ: /qqbrowser/i.test(u)
      // QQ浏览器
    }
    return json
  }
}
