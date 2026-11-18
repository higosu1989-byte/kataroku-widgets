/* KATAROKU「AIに質問」の質問欄を置く（ページのURLから建物と部屋の番号を読んで、質問欄に渡す） */
(function (s) {
  if (!s || !s.parentNode) return;
  var m = location.pathname.match(/^\/building\/(\d+)\/(?:(\d+)\/?)?/);
  if (!m) return;
  var f = document.createElement('iframe');
  f.src = 'https://higosu1989-byte.github.io/kataroku-widgets/ai2.html?e=' + m[1] + (m[2] ? '&r=' + m[2] : '');
  f.title = 'AIに質問';
  f.style.cssText = 'display:block;width:100%;max-width:480px;min-height:200px;max-height:200px;margin:0 auto;border:0';
  s.parentNode.insertBefore(f, s.nextSibling);
})(document.currentScript);
