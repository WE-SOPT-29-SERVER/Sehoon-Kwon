# 7์ฃผ์ฐจ ๊ณผ์ 

## ๐ผ firebase-storage-resize-images

> firebase์์ ์ ๊ณตํ๋ ๋ฆฌ์ฌ์ด์ฆ ๊ธฐ๋ฅ์ ์ ์ฉํ๋ค.

### <b>before</b>

<img src="https://user-images.githubusercontent.com/54793607/146774269-65e05ceb-74b7-4b29-950e-5fd7badde2de.png
">
๋ฆฌ์ฌ์ด์ฆ ๊ธฐ๋ฅ ์ ์ฉ์ 

<br>

### <b>โจ after โจ</b>

<img src="https://user-images.githubusercontent.com/54793607/146774132-6920cc0e-ae72-400a-9980-a0c951cc760d.png
">
๋ฆฌ์ฌ์ด์ฆ ๊ธฐ๋ฅ ์ ์ฉํ

<br>

## ๐ก refresh token of jsonwebtoken

> `refresh token` ์ด์ ์ `jwt`๊ฐ ์์ฑํ๋ `access token`์ ๋ณด์์ ์ํด ์ ํจ ๊ธฐ๊ฐ์ด ์งง๊ฒ ์์ฑ๋๋ค. <br>
> ์ด๋ ๊ฒ ์ ํจ๊ธฐ๊ฐ์ด ์งง์ `access token`์ ๋ณด์ํ๊ธฐ ์ํด ์์ฑ๋๋ `jwt`๊ฐ ๋ฐ๋ก `refresh token`์ด๋ค.

<Br>

### โจ <b>jwt logic</b>

1. ๋ก๊ทธ์ธ ์, `access`์ `refresh` token ๋ชจ๋ ๋ฐ๊ธํ๋ค.

   ์ฌ๊ธฐ์ ๋ฐ๊ธ๋๋ ํ ํฐ์์ `refresh` token๋ง `userDB`์ ๋ด์์ค๋ค.

2. `auth middlware`๋ฅผ ํตํ๋ API์ ์ ๊ทผ ์, ๋ฏธ๋ค์จ์ด๋ฅผ ๊ฑฐ์น๋ค.

   ์ด๋ ํ ํฐ์ ์ ํจ๊ธฐ๊ฐ์ ํ์ธํ์ฌ ์ดํ์ ๋ก์ง์ ์ฒ๋ฆฌํ๋ค.

   - `access, refresh token` ๋ง๋ฃ -> error
   - `access` ๋ง๋ฃ, `refresh` ์ ํจ -> `access` ์ฌ๋ฐ๊ธ
   - `access` ์ ํจ, `refresh` ๋ง๋ฃ -> `refresh` ์ฌ๋ฐ๊ธ
   - `access`, `refresh` ์ ํจ -> ๋ค์ ๋ฏธ๋ค์จ์ด๋ก

3. ๋ก๊ทธ์์ ์, `access` + `refresh` ๋ชจ๋ ๋ง๋ฃ
