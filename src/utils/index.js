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
  isWx: () => {
    const ua = window.navigator.userAgent.toLowerCase()
    // console.log(ua) //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true
    } else {
      return false
    }
  }
}
