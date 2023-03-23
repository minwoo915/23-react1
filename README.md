# 23-React1 김민우

## 0323 4주차 수업내용

### 1.새 프로잭트 생성

<br>

---

<br>

## 0316 3주차 수업내용...

### 1.node 설치 후 설치 확인
1. 구글에 node 검색 후 LTS버전 설치하기.
2. cmd 창을 열어서 node -v 혹은 node --version으로 설치 확인
   
### 2.NPM(Node Package Manager)과 NPX(Node Package Runner)
* NPM : Node.js에서 사용하는 패키지를 다운 받을 수 있는 프로그램
* NPX : NPM 5.2.0 버전부터 새로 추가된 도구

### 3.리액트의 장점
1. 빠른 업데이트와 랜더링 속도
2. 컴포넌트 기반의 구조
3. 재사용성
4. 든든한 지원군
5. 활발한 지식 공유 및 커뮤니티

### 4.리액트의 단점
1. 방대한 학습량
2. 높은 상태 관리 복잡도

### 5.리액트 프로잭트 생성
1. 새로운 작업폴더 들어가기
2. 터미널에서 npx create-react-app '폴더이름' 작성 후 설치
```
npx create-react-app ex
```
3. 설치가 되면 작업 폴더를 다시 열고 npm start로 실행

<br>

---

<br>

## 0309 2주차 수업내용

### 1.git 다운로드 후 사용자 설정
이름과 이메일 설정하기
```
$ git config --global user.name "user.name"
$ git config --global user.email "email@example.com"
```

### 2.연산자
* a++ : 식을 먼저 처리하고 1을 증가시킨다.

* ++a : 1을 먼저 추가하고 식을 처리한다.

### 3.컴포넌트의 종류
* 클래스형 컴포넌트
* 함수형 컴포넌트

### 4. 함수의 종류
* funtion statement형

``` js
function add(a, b) {
    return a + b;
}
```
* arrow function expression형
``` js
const add = (a, b) => {
    return a + b;
}
```

### 5. 마크다운 주요 문법
* 큰 제목
```
This is an H1
=============
```

This is an H1
=============

* 작은 제목
```
This is an H2
-------------
```

This is an H2
-------------

* 글머리 : 1 ~ 6 까지만 지원
```
# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6
```

# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6

* 순서있는 목록
```
1. 첫번째
2. 두번째
3. 세번째
```
1. 첫번째
2. 두번째
3. 세번째

* 순서없는 목록
```
* 별
    + 플러스
        - 마이너스
```
* 별
  + 플러스
    - 마이너스