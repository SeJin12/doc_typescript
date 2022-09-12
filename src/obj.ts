// object
const Player: {
  readonly name: string; // readonly 상수 설정으로 값 변경 불가
  age?: number; // ? = 생략 가능.  타입은 number 또는 undefined
} = {
  name: "Me",
};

Player.age = 20;
// Player.name = 'You'; // Error
