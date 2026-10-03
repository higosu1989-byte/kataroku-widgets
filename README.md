# kataroku-widgets

KATAROKU（kataroku.jp）の物件ページに埋め込む部品です。GitHub Pages で公開しています。

- `commute.html` … 会社・目的地までの距離。会社の住所かビル名を入れると、物件からの直線距離と、電車・自転車での行き方（Googleマップ）を案内します。
  物件の位置は `?ll=緯度,経度` で渡します。位置の検索に国土地理院の住所検索と OpenPOI API を使います。
