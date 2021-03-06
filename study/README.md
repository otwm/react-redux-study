# 소개
하나의 스토어, 액션, 리듀서 같은게 있다.

## 동기 
상태 관리는 굉장히 어려워 진다.
이러한 복잡함은 변화(mutation)나 비동기(asyncronicity)와 같이  사람이 추론해내기 어려운 두가지 개념을 섞어서 사용한다는 데서 온다.
(이걸 왜 멘토스와 콜라로 불러??)
그래서 어쨋든 상태 관리는 잘해보려고 한다.

## 3가지 원칙 

### 진실은 하나의 소스로 부터
어플리케이션의 모든 상태는 하나의 스토어 안에 하나의 객체 트리 구조로 저장됩니다.    
=> 단 하나의 소스이기 때문에 명백한 하나의 상태로서 생각할 수 있을듯 하다.

### 상태는 읽기 전용이다. 
상태를 변화시키는 유일한 방법은 무슨 일이 벌어지는 지를 묘사하는 액션 객체를 전달하는 방법뿐입니다.

### 변화는 순수 함수로 작성되어야 한다.
액션에 의해 상태 트리가 어떻게 변화하는 지를 지정하기 위해 프로그래머는 순수 리듀서를 작성해야 합니다.  
리듀서는 그저 이전 상태와 액션을 받아 다음 상태를 반환하는 순수 함수입니다.   
=> 함수형 언어를 생각 한다면 그것이 맞다. 모티브가 되는 Elm 도 결국 함수형 언어.  
 
## 기존 기술들 
### Flux  
#### redux는 디스패처라는 개념이 존재하지 않는다.  
#### redux는 당신이 결코 데이터의 상태를 바꾸지 않는다고 가정한다.
리듀서에서는 항상 새로운 객체를 반환해야한다.(immutable, object spread등 활용가능) 
### Elm
(state, action) => state  
### Immutable
읽기 전용으로 다루어지는 리덕스는 불변 라이브러리와 잘 어울린다.
### Baobab
Baobab과의 조합은  별로 
### Rx 
리덕스와 Rx와 같이 사용하는 것은 좋다.

## 생태계 
http://dobbit.github.io/redux/docs_kr/introduction/Ecosystem.html
## 액션 

# 기초
## 액션
액션이란 말 그대로 액션이다. 보통 타입을 가지고 있고,(꼭 있어야 하는 건 아니지만)
액션 생성자를 만들어 액션을 만들어 내는 역활을 하게 할 수도 있다. 
## 리듀서 
리듀서는 발생한 액션에 따라 상태가 어텋게 변한다는 것을 정의 합니다.
### 상태 설계하기
상태에 대해 미리 생각 해봅시다. 또한 UI 상태는 분리되어야 합니다. 또한 상태는 적절하게 
정규화 될 필요가 있습니다. 
### 액션 다루기 
(previousState, action) => newState
이 함수를 Array.prototype.reduce로 넘길 것이기에 리듀서라고 합니다. 
리듀서를 **순수**하게 유지 하는 것은 매우 중요합니다. 
절대로 하지말아야 할 것은
 * 인수들을 변경 하기 
 * API 호출이나 라우팅 전환 같은 사이드 이펙트 일으키기
 * Date.now()나 Math.random() 같이 순수하지 않은 함수를 호출하기
리듀서를 **순수** 하게 유지 한다는 것은 결국 함수형 언어 개념과 연관 되어 있습니다.
리듀서를 **순수** 하게 함으로써 언제나 일관적인 동작을 예측할 수 있습니다.

항상 새로운 상태를 반환하여야 하며, 알수 없는 액션에 대해서는 이전의 state를 반환합니다.
### 더 많은 액션 다루기 
### 리듀서 쪼개기
관심사가 다른 것은 쪼개도록 합시다. 리듀서 조합을 이용하여 적당히 쪼갭니다. 
최상위 리듀서에 각 영역에 리듀서들이 조합 됩니다. 
combineReducers 메서드를 이용하여 더 쉽게 조합 가능합니다. 
es6 의 경우 combineReducers를 이용하여 더 쉽게 조합 할 수 있습니다.

```javascript
import { combineReducers } from 'redux';
import * as reducers from './reducers';

const todoApp = combineReducers( reducers );
``` 
## 스토어
스토어는 다음의 일을 합니다.
* 어플리케이션의 상태를 저장하고
* getState() 를 통해 상태에 접근하게 하고
* dispatch(action)을 통해 상태를 수정할 수 있게 하고
* subscribe(listener)를 통해 리스너를 등록 합니다. 
Redux에서는 단 하나의 스토어만 가질 수 있습니다. 
모든 리덕스 앱에서의 데이터는 아래와 같이 4단계 생명주기를 따릅니다. 
1. 여러분이 store.dispatch(action)를 호출합니다. 
2. 리덕스 스토어가 여러분이 지정한 리듀서 함수들을 호출합니다. 
3. 루트 리듀서가 각 리듀서의 출력을 합쳐서 하나의 상태 트리로 만듭니다. 
  * 리듀서를 작성할 때 꼭 combineReducers를 써야하는 것은 아닙니다. 직접 만들어 써도 됩니다.
4. 등록된 모든 리스너가 호출됩니다. React Redux으로 바인딩 하였다면, 이시점에서 
   자동으로 component.setState(newState)가 호출 됩니다. 
   
## 데이터 흐름
Redux의 아키텍쳐는 엄격한 일방향 데이터 흐름을 따라 전개됩니다.   
  
이는 애플리케이션 내의 모든 데이터가 같은 생명주기 패턴을 따르며, 앱의 로직을 좀 더 예측가능하게 하고 
이해 하기 쉽게 만든다는 뜻입니다. 이는 또한 데이터 정규화를 도와서 같은 데이터의 복제본들이 
서로를 모르는 여럿으로 나눠지고 말지 않도록 해줍니다. 
## React와 함께 사용하기
리엑트와 리덕스는 직접적인 관계가 없다. 그러나 잘 어울린다.
### React Redux 설치
```
npm install --save react-redux
```
### 영민한 컴포넌트와 우직한 컴포넌트 
가능하면 앱의 최상위 컴포넌트만이 redux와 연관되게 하자, 하위 컴포넌트는 오로지 prop만을 이용한다.
https://facebook.github.io/react/docs/thinking-in-react-ko-KR.html
## 예시: Todo List


