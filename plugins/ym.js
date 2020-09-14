/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */

export default ({ app }) => {
  const key = app.store.getters.getYM

  if (process.env.NODE_ENV !== 'production') { return }

  if (!key) { return }

  (function (m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      function () {
        (m[i].a = m[i].a || []).push(arguments)
      }
    m[i].l = 1 * new Date();
    (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a)
  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym')

  ym(key, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  })
}
