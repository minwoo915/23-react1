# 23-React1 김민우

## 0504 10주차 수업내용

### 1. 리스트와 키란 무엇인가?
* 리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것입니다.
* 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미합니다.
* 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있습니다.

### 2. 여러 개의 컴포넌트 렌더링하기
* 예의 에어비엔비의 화면처럼 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어있는 엘리먼트를 map()함수를 이용하여 렌더링 합니다. (교과서 291페이지)
* 다음은 numbers 배열에 들어있는 각각의 요소를 map()를 이용하여 하나씩 추출하여, 2를 곱한 후 doubled라는 배열에 다시 넣는 코드입니다.

``` js
const doubled = numbers.map((number) => number * 2);
```

* 다음은 리액트에서 map()함수를 사용한 예제입니다.

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => 
<li>{number}</li>
);
```

* 이 코드는 numbers의 요소에 2를 곱하는 대신 `<li>`태그를 결합해서 리턴하고 있습니다.
* 리턴된 listItems는 `<ul>`테그와 결합하여 렌더링 됩니다.

### 3. 기본적인 리스트 컴포넌트
* 앞서 작성한 코드를 별도의 컴포넌트로 분리하면 다음과 같습니다. (294 페이지)
* 이 컴포넌트는 props로 받은 숫자를 numbers로 받아 리스트로 렌더링해 줍니다.
* 이 코드를 실행하면 "리스트 아이쳄에 무조건 키가 있어야 한다" 는 경고 문구가 나옵니다.
* 경고 문구가 나오는 이유는 각각의 아이템에 kry props가 없기 때문입니다.

### 4. 리스트의 키에 대해 알아보기
* 리스트에서의 키는 "리스트 에서 아이템을 구별하기 위한 고유의 문자열" 입니다.
* 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용합니다.
* 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됩니다.

### 5. 폼이란?
* 폼은 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용됩니다.

### 6. 제어 컴포넌트
* 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트 입니다.

<br>

---

<br>

## 0427 9주차 수업내용

### 1. 이벤트 처리하기
* DOM에서 클릭 이벤트를 처리하는 예제 코드.
  
```js
<button onclick="activate()">
    Activate
</button>
```

* React에서 클릭 이벤트 처리하는 예제 코드.

```js
<button onClick={activate()}>
    Activate
</button>
```

* 둘의 차이점은
    1. 이벤트 이름이 onclick에서 onClick으로 변경.(Camel case)
    2. 전달하려는 함순느 문자열에서 함수 그대로 전달.
* 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 "이벤트 핸들러(Event Handler)" 라고 합니다. 또는 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 "이벤트 리스너(Event Listener)" 라고 부르기도 합니다.
* 이벤트 핸들러 추가하는 방법은?
* 버튼을 클릭하면 이벤트 핸들러 함수인 handleClick() 함수를 호출하도록 되어 있습니다.
* bind를 사용하지 않으면 this.handleClick은 글로벌 스코프에서 호출되어, undefined으로 사용할 수 없기 때문입니다.
* bind를 사용하지 않으려면 화살표 함수를 사용하는 방법도 있습니다.
* 하지만 클래스 컴포넌트는 이제 거의 사용하지 않기 때문에 이 내용은 참고만 합니다.
* 함수형에서 이벤트 핸들러를 정의하는 방법은 두 가지 입니다.
* 함수형에서는 this를 사용하지 않고, onClick에서 바로 HandleClick을 넘기면 됩니다.
  
### 2. Arguments 전달하기
* 함수를 정의할 때는 파라미터 혹은 매개변수, 함수를 사용할 때는 아귀먼트 혹은 인자 라고 부릅니다.
* 이벤트 핸들러 매개변수를 전달해야 하는 경우도 많습니다.

```js
<button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>

<button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
```

* 위의 코드는 모두 동일한 역할을 하지만 하나는 화살표 함수를, 다른 한나는 bind를 사용했습니다.
* event라는 매개변수는 리액트의 이벤트 객체를 의미합니다.
* 두 방법 모두 첫 번째 매개변수는 id이고 두 번째 매개변수로 event가 전달 됩니다.
* 첫 번째 코드는 명시적으로 event를 매개변수로 넣어 주었고, 두 번째 코드는 id 이후 두번째 매개변수로 event가 자동 전달됩니다.
* 함수형 컴포넌트에서 이벤트 핸들러에 매개변수를 전달한 때는 254페이지 코드와 같이 합니다.

### 3. 조건부 렌더링이란?

```js
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UseGreeting/>;
    }
    return <GuestGreeting/>;
}
```

* props로 전달 박은 isLoggedln이 true이면 <UserGreeting/>을, false면 <GuestGreeting/>을 return 합니다.
* 이와 같은 렌더링을 조건부 렌더링 이라고 합니다.

### 4. 엘리먼트 변수
* 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수입니다.
* 272페이지 코드 처럼 state에 따라 button 변수에 컴포넌트의 객체를 저장하여 return문에서 사용하고 있습니다.

### 5. 인라인 조건
* 필요한 곳에 조건문을 직접 넣어 사용하는 방법입니다.
1. 인라인 if
    * if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용합니다.
    * &&는 and연자로 모든 조건이 참일때만 참이 됩니다.
    * 첫 번 조건이 거짓이면 두번째 조건을 판달할 필요가 없습니다. 단축평가.
  
    ```js
    true && expression -> expression
    false && expression -> false
    ```

   * 판단만 하지 않는 것이고 결과값은 그대로 리턴됩니다.
2. 인라인 if-else
    * 삼항 연산자를 사용합니다.
    ```
    조건문 ? 참일 경우 : 거짓일 경우
    ```
    * 문자열이나 엘리먼트를 넣어서 사용할 수도 있습니다.

### 6. 컴포넌트 렌더링 막기
* 컴포넌트를 렌더링하고 싶지 않을 때에는 null을 리턴합니다.

<br>

---

<br>

## 0413 7주차 수업내용

### 1. 훅이란?
* 클래스형 컴포넌트에서는 생성자에서 state를 정의하고, setState() 함수를 통해 state를 업데이트 합니다.
* 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었습니다.
* 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅(Hook) 입니다.
* 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구햔할 수 있게 되었습니다.
* Hook이란 'state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수'를 의미합니다.
* 훅의 이름은 모두 'use'로 시작합니다
* 사용자 정의 훅(custom hook)을 만들 수 있으며, 이 경우에 이름은 자유롭게 할 수 있으나 'use'로 시작할 것을 권장합니다.

### 2. useState
* useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook입니다.
* 다음 예제는 버튼을 클릭할 때마다 카운트가 증가하는 함수형 컴포넌트 입니다.
* 하지만 증가는 시킬 수 있지만 증가할 때마다 재 렌더링은 일어나지 않습니다.
* 이럴 때 state를 사용해야 하지만 함수형에는 없기 때문에 useState()를 사용합니다.
  
```js
import React {useState} from "react";

function Counter(props) {
    var count = 0;

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onCLick={() => count++}>
            클릭
            </button>
        </div>
    );
}
```

### 3. useEffect
* 이 함수는 사이드 이펙트를 수행하기 위한 것입니다.
* 영어로는 부작용을 의미합니다. 일반적으로 프로그래밍에서는 사이트 이펙트는 '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'을 말합니다.
* 하지만 리액트에서는 효과 혹은 영향을 뜻하는 effect의 의미에 가깝습니다.
* 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없기 때문입니다. 렌더링이 끝난 이후에 실행되어야 하는 작업들입니다.
* 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공합니다.
* useEffect()함수는 다음과 같이 사용합니다.
* 첫 번째 파라미터는 이펙트 함수가 들어가고, 두 번째 파라미터로는 의존성 배열이 들어갑니다.
```js
useEffect(이펙트 함수, 의존성 배열);
```
* 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됩니다.
* 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후, 그리고 재 렌더링 이후에 실행됩니다.

### 4. useMemo
* useMemo() 혹은 Memoizde value를 리턴하는 훅입니다.
* 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피할 수 있습니다.
* 이 훅은 렌더링이 일어나는 동안 실행됩니다.
* 따라서 렌더링이 일어나는 동안 실행돼서는 알될 작업을 넣으면 안됩니다.
* 예를 들면 useEffect 사이트 이팩트 같은 것입니다.
  
### 5. useCallback
* useCallback() 혹은 useMemo()와 유사한 역할을 합니다.
* 차이점은 값이 아닌 함수를 반환한다는 점입니다.
* 의존성 배열을 파라미터로 받는 것은 useMemo와 동일 합니다.
* 파라미터로 받은 함수를 콜백이라고 부릅니다.
* useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환합니다.

### 6. useRef
* useRef() 혹은 레퍼런스를 사용하기 위한 훅입니다.
* 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미합니다.
* useRef() 훅은 바로 이 레퍼런스 객체를 반환합니다.
* 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미합니다.
```js
const refContainer = useRef(초깃값);
```
* 이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지됩니다.
* 즉, 컴포넌트 마운트 해체 전까지는 계속 유지된다는 의미입니다.

### 7. 훅의 규칙
* 첫 번째 규칙은 무조건 최상위 레벨에서만 호출해야 한다는 것입니다. 여기서 최상위는 컴포넌트의 최상위 레벨을 의미합니다.
* 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안 됩니다.
* 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 합니다.
* 페이지 224의 코드는 조건에 따라 호출됨으로 잘못된 코드입니다.
* 두 번째 규칙은 리액트 함수 컴포넌트에서만 훅을 호출해야 한다는 것입니다.
* 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안 됩니다.
* 훅은 리액트 함수 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있습니다.

### 8. 커스텀 훅 호출하기
* 두 개의 자바스크립트 함수에서 하나의 로직을 고유하도록 하고 싶을 때 새로운 함수를 하나 만드는 방법을 사용합니다.
* 리액트 컴포넌트와 훅은 모두 함수이기 때문에 동일한 방법을 사용할 수 있습니다.
* 이름을 use로 시작하고, 내부에서 다른 훅을 호출하는 자바스크립트 함수를 만들면 됩니다.

<br>

---

<br>

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