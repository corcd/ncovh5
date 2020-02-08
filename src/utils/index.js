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
  }
}
