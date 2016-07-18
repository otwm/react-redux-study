# 리덕스 
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

