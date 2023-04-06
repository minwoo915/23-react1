# 23-React1 김민우

## 0406 6주차 수업내용

### 1. 컴포넌트 추출
* 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있습니다.
* 큰 컴포넌트에서 일부를 추출해서 컴포넌트를 만드는 것입니다.
    + 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋습니다.

### 2. 댓글 컴포넌트 실습

1. Comment.jsx라는 이름의 파일을 만들고 Comment라는 이름의 리액트 함수 컴포넌트 만들기

#### Comment.jsx

```js
import React from "react";

function Comment(props) {
    return (
        <div>
            <h1>내가 만든 첫 컴포넌트.</h1>
        </div>
    );
}

export default Comment;
```

2. CommentList.jsx 파일을 새로 만들고 CommentList라는 이름의 리액트 함수 컴포넌트 만들기
   
#### CommentList.jsx

```js
import React from "react";
import Comment from "./Comment";

function CommentList(props) { 
    return (
        <div>
            <Comment />
        </div>
    )
}

export default CommentList;
```

3. index.js파일 수정하기

#### index.js

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';


  const root = ReactDOM.createRoot(document.getElementById('root')); 
  root.render(
    <React.StrictMode>
      <CommentList />
    </React.StrictMode>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

4. CSS를 추가하고 나서 Comment 컴포넌트에 작성자 이름과 댓글 내용을 동적으로 변경할 수 있게 하기 위해 props를 추가하기

#### Comment.jsx

```js
import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
  };

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    alt="프로필 이미지"
                    style={styles.image}
                />                
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment;
```

5. CommentList 수정하기

#### CommentList.jsx

```js
import React from "react";
import Comment from "./Comment";

function CommentList(props) { 
    return (
        <div>
            <Comment name={"이인재"} Comment={"안녕하세요, 소플입니다"}/>
        </div>
    )
}

export default CommentList;
```

6. map() 함수를 추가해서 Comment 컴포넌트를 리턴하도록 코드를 작성하기

#### CommentList.jsx

```js
import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인재",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요.",
    },
    {
        name: "강민경",
        comment: "저도 리액트 배워보고 싶어요.",
    },
];

function CommentList(props) { 
    return (
        <div>
            {comments.map((foo) => {
                return (
                    <Comment name={foo.name} comment={foo.comment}/>
                )
            })}
        </div>
    )
}

export default CommentList;
```

### 3. state
* State는 리액트 컴포넌트의 상태를 의미합니다.
* 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미합니다.
* 정확히는 컴포넌트의 변경가능한 데이터를 의미합니다.
* State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 합니다.
* state의 특징은 리액트 만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐입니다.

### 4. 생명주기에 대해 알아보기
* 생명주기는 컴포넌트의 생성 시점, 종료 시점을 나타내는 것입니다.
* constructor가 실행되면서 컴포넌트가 생성됩니다.
* 생성 직후 conponentDidMount() 함수가 호출됩니다.
* 컴포넌트가 소멸하기 전까지 여러 번 랜더링 합니다.
* 랜더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어집니다.
* 그리고 랜더링이 끝나면 conponentDinUpdate() 함수가 호출됩니다.
* 마지막으로 컴포넌트가 언마운트 되면 conponentWillUnmount() 함수가 호출됩니다.



<br>

---

<br>

## 0330 5주차 수업내용

### 1. 엘리먼트의 정의
* 엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.
* 공식페이지에서는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들"이라고 설명하고 있습니다.
* 웹사이트의 경우는 DOM 엘리먼트이며 HTML요소를 의미합니다.

### 2. 엘리먼트의 생김새
* 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재합니다.
* 컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS객체입니다.
* 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있습니다.

### 3. 엘리먼트의 특징
* 리액트 엘리먼트의 가장 큰 특징은 불변성입니다.
* 즉, 한번 생성된 엘리먼트의 children이나 속성(attributes)을 바꿀 수 없습니다.
* 만일 내용이 바뀌면 어떻게 해야 할까요?
    + 이 때는 컴포넌트를 통해 새로운 엘리먼트를 생성하면 됩니다.
    + 그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꾸는 것입니다.
    + 이렇게 교체하는 작업을 하기위해 Virtual DOM을 사용합니다.

### 4. Root DOM node
<p>다음 html코드는 id값이 root인 div태그로 단순하지만 리액트에 필수로 들어가는 아주 중요한 코드입니다.</p>
이 div태그 안에 리액트 엘리먼트가 렌더링 되며, 이 것을 Root DOM node라고 합니다.

```html
<div id="root"></div>
```

<p>엘리먼트를 렌더링하기 위해서는 다음과 같은 코드가 필요합니다.</p>

``` jsx
const element = <h1>안녕, 리액트!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

### 5. 컴포넌트에 대해 알아보기
* 2장에서 설명한 바와 같이 리액트는 컴포넌트 기반의 구조를 갖습니다.
* 컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미합니다.
* 컴포넌트 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있습니다.
* 컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 면에서는 유사합니다.
* 다만 입력과 출력은 입력은 props가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력됩니다.
* 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷합니다.

### 6. Props에 대해 알아보기
Props의 개념
* props는 prop(property : 속성, 특성)의 준말입니다.
* 이 props가 바로 컴포넌트의 속성입니다.
* 컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됩니다.
* props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체입니다.
* 에어비앤비의 예도 마찬가지 입니다.
  
Props의 특징
* 읽기 전용입니다. 변경할 수 없다는 의미 입니다.
* 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됩니다.

Pure 함수 vs Impure 함수
* Pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수입니다.
* Impure함수는 인수로 받은 정보가 함수 내부에서 변하는 함수입니다.

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