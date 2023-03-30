# 23-React1 김민우

## 0330 5주차 수업내용

### 1. 엘리먼트의 정의
* 엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.
* 공식페이지에서는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들"이라고 설명하고 있습니다.
* 웹사이트의 경우는 DOM 엘리먼트이며 HTML요소를 의미합니다.

### 2. 엘리먼트의 생김새
* 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재합니다.
* 컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS객체입니다.
* 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있습니다.

<br>

---

<br>

## 0323 4주차 수업내용

### 1. 새 프로잭트 생성
1. README 백업하기
2. local에 있는 저장소 이름 바꾸기 / 삭제
3. 새 프로잭트 생성 (npx create-react-app 23-react1)
4. README.md 덮어쓰기
5. github 저장소 삭제
6. 로컬에서 23-react1 push

### 2. JSX란?
* Javascript에 XML을 추가한 확장한 문법.
* JSX는 내부적으로 XML?HTML 코드를 자바스크립트로 변환하는 과정을 거침.

### 3. JSX의 장점
1. 가독성이 향상된다.
2. 코드가 간결해진다
3. Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안성이 올라간다.

### 4. JSX사용법
* 모든 자바 스크립트 문법을 지원합니다.
* 자바스크립트 문법에 XML과 HTML을 섞어서 사용합니다.
* 만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 { }괄호를 사용합니다.


<br>

---

<br>

## 0316 3주차 수업내용

### 1. node 설치 후 설치 확인
1. 구글에 node 검색 후 LTS버전 설치하기.
2. cmd 창을 열어서 node -v 혹은 node --version으로 설치 확인
   
### 2. NPM(Node Package Manager)과 NPX(Node Package Runner)
* NPM : Node.js에서 사용하는 패키지를 다운 받을 수 있는 프로그램
* NPX : NPM 5.2.0 버전부터 새로 추가된 도구

### 3. 리액트의 장점
1. 빠른 업데이트와 랜더링 속도
2. 컴포넌트 기반의 구조
3. 재사용성
4. 든든한 지원군
5. 활발한 지식 공유 및 커뮤니티

### 4. 리액트의 단점
1. 방대한 학습량
2. 높은 상태 관리 복잡도

### 5. 리액트 프로잭트 생성
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

### 1. git 다운로드 후 사용자 설정
이름과 이메일 설정하기
```
$ git config --global user.name "user.name"
$ git config --global user.email "email@example.com"
```

### 2. 연산자
* a++ : 식을 먼저 처리하고 1을 증가시킨다.

* ++a : 1을 먼저 추가하고 식을 처리한다.

### 3. 컴포넌트의 종류
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