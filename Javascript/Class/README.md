# 클래스를 정의하자
1. Class 선언
2. Class 표현식

## 1. Class 선언
- 클래스의 이름과 함께 `class` 키워드를 사용함
- 클래스의 선언은 **Hoisting이 일어나지 않음**
  - cf) 함수의 선언은 Hoisting이 일어남
  - `ReferenceError`가 발생하는 이유
    - 클래스가 호이스팅될 때 초기화는 되지 않기 때문이다

## 2. Class 표현식
- 클래스의 이름이 있을 수도, 없을 수도 있음
  - 이름을 가진 class 표현식은 클래스 body의 local scope에 한해 유효함
  - 클래스의 `name` 속성을 통해 이름을 찾을 수 있음

# 클래스 body와 메서드 정의
- body란 : 중괄호 `{}`로 묶여있는 부분
  - 이 곳에 메서드, constructor와 같은 class 멤버를 정의

## constructor
- class로 생성된 **객체**를 **생성하고 초기화**하기 위한 특수 메서드
- 한 클래스에 한 개만 존재할 수 있음
- 부모 클래스의 constructor를 호출하기 위해 `super` 키워드를 사용할 수 있다.

## 정적 메서드와 특성
- `static` 키워드
- **정적 메서드는 클래스 자체에 속하며, 인스턴스 객체에 속하지 않는다.**
- **클래스의 instance에서는 호출할 수 없음 (`undefined` or `error`)**
- static 메서드
  - 어플리케이션을 위한 유틸리티 함수를 생성하는 데 사용됨
  - 인스턴스와 관련이 없는 동작을 수행
- static 속성
  - 캐시, 고정 환경 설정, 인스턴스 간에 복제할 필요가 없는 기타 데이터

## 프로토타입 및 정적 메서드를 사용한 this binding
- 메서드를 변수에 할당한 다음 호출하는 것은
- 정적 메서드나 프로토타입 메서드가 this값 없이 호출되는 것과 같다
- 이 때, this값은 undefined이다

## 인스턴스 속성
- 인스턴스 속성은 반드시 클래스 메서드 내에 정의되어야 한다
- 정적 속성과 프로토타입 데이터 속성은 반드시 클래스 선언부 바깥쪽에서 정의되어야 한다
  ```javascript
  Rectangle.staticWidth = 20;
  Rectangle.prototype.prototypeWidth = 25;
  ```

## Field 선언
### public 필드 선언
- 필드를 먼저 선언
  ```javascript
  class Rectangle {
    height = 0;
    width;
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  ```
### private 필드 선언
```javascript
// ES2019 문법
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```
- 클래스의 바깥에서 private 필드를 접근하려고 하면 에러가 발생함
- private 필드는 클래스 내부에서만 읽고 쓰기가 가능하다