# 7주차 과제

## 🖼 firebase-storage-resize-images

> firebase에서 제공하는 리사이즈 기능을 적용한다.

### <b>before</b>

<img src="https://user-images.githubusercontent.com/54793607/146774269-65e05ceb-74b7-4b29-950e-5fd7badde2de.png
">
리사이즈 기능 적용전

<br>

### <b>✨ after ✨</b>

<img src="https://user-images.githubusercontent.com/54793607/146774132-6920cc0e-ae72-400a-9980-a0c951cc760d.png
">
리사이즈 기능 적용후

<br>

## 🛡 refresh token of jsonwebtoken

> `refresh token` 이전에 `jwt`가 생성하는 `access token`은 보안을 위해 유효 기간이 짧게 생성된다. <br>
> 이렇게 유효기간이 짧은 `access token`을 보완하기 위해 생성되는 `jwt`가 바로 `refresh token`이다.

<Br>

### ✨ <b>jwt logic</b>

1. 로그인 시, `access`와 `refresh` token 모두 발급한다.

   여기서 발급되는 토큰에서 `refresh` token만 `userDB`에 담아준다.

2. `auth middlware`를 통하는 API에 접근 시, 미들웨어를 거친다.

   이때 토큰의 유효기간을 확인하여 이후의 로직을 처리한다.

   - `access, refresh token` 만료 -> error
   - `access` 만료, `refresh` 유효 -> `access` 재발급
   - `access` 유효, `refresh` 만료 -> `refresh` 재발급
   - `access`, `refresh` 유효 -> 다음 미들웨어로

3. 로그아웃 시, `access` + `refresh` 모두 만료
