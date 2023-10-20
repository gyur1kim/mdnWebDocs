// 클래스 선언
class Rectangle1 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
// 클래스 표현식
let Rectangle2 = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// ============================================
class Rectangle3 {
  // 객체를 생성하고 초기화
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // 메서드
  calcArea() {
    return this.height * this.width;
  }
}

// ============================================
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
console.log(obj.speak());   // Animal{}
let speak = obj.speak;
console.log(speak());       // undefined
// console.log(obj.eat());  // 에러 발생, eat은 정적 메서드이기 때문에 class에 속함

console.log(Animal.eat());  // [class Animal]
let eat = Animal.eat;
console.log(eat());         // undefined
/**
 * this의 값이 달라지는 이유는? JavaScript에서 함수 호출 방식에 따라 this가 다르게 동작하기 때문!
 * 
 * 1. obj.speak()
 *    speak 메서드는 obj 객체의 메서드로 호출되었음
 *    따라서 this는 obj 객체를 가리키게 된다.
 * 2. speak()
 *    spaek 함수는 메서드로 호출되지 않았으며 별도로 호출되었음
 *    따라서 this는 현재 실행 컨텍스트에 따라 달라짐
 *    브라우저에서는 전역객체인 window, nodejs에서는 undefined
 * 3. Animal.eat()
 *    eat 메서드는 정적 메서드, this는 클래스 Animal 자체를 가리킨다.
 * 4. eat()
 *    eat 함수는 별도로 호출되었기 때문에 this는 현재 실행 컨텍스트에 따라 달라진다.
 */