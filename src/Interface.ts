/*
    https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
    interface  VS  type
    
    interface 는 중복 선언을 통해 확장이 가능하기 때문에, 기존 로직에 영향을 주지 않는다.
    type 은 중복 선언은 불가능, 기존 로직을 수정해야한다. 장점은 type의 값에 대하여 정의가 가능하다. 

    사용 목적은 굉장히 유사하여, 취향에 따라 사용하면 된다.
    하지만  ts 파일을 js 파일로 컴파일될 때, interface 코드는 사라지기 때문에, 프로젝트 용량과 관련하여 이점이 있다.

*/

interface Food {
  name: string;
  price: number;
}

interface Food {
  tasty: boolean;
}

interface Product extends Food {}

class Foods implements Food {
  constructor(
    public name: string,
    public price: number,
    public tasty: boolean
  ) {}
}

//
type Team = "red" | "blue" | "green";
type Health = 1 | 5 | 10;

type User = {
  name: string;
};

type Player = User & {
  health: Health;
};
