# typescript 시작하기

프로젝트 생성

```bash
npm init -y
```

npm 모듈 설치

```bash
npm install -D typescript
npm install -D ts-node
npm install nodemon
```

-D 옵션을 추가할 경우, package.json 파일 devDependencies 옵션이 추가된다.
이 경우, --produnction 옵션을 추가하여 배포할 프로젝트를 빌드할 때, devDependencies에 있는 패키지들은 포함되지 않는다.

---

tsconfig.json

```json
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "build",
    "esModuleInterop": true,
    "target": "ES6",
    "lib": ["ES6", "DOM"],
    "strict": true,
    "allowJs": true,
    "module": "CommonJS"
  }
}
```

include: 설정한 경로를 컴파일할 대상에 포함시킨다.
compilerOptions
- outDir: ts -> js 파일로 컴파일한 결과물들이 저장되는 경로를 설정한다.
- esModuleInterop: true 설정 시, export default가 없는 라이브러리도 * as 없이 import가 가능하다.
- target: tsc가 최종적으로 컴파일하는 문법 형태를 결정한다. 기본 값은 ES3 이다.
- lib: 특정 기능에 대한 문법(타입)을 추론한다. 'DOM'을 추가한다면 브라우저에서 사용하는 querySelector, localStorage와 같은 문법을 추론하여, 자동완성 기능도 사용할 수 있다.
- strict: 엄격한 모드로 검사한다. false일 경우, typescript를 사용하는 의미가 없다.
- allowJs: JS 파일을 TS 파일에서 import 하여 사용할 수 있게 해준다.
- module: import 방식에 대한 설정


package.json
```json
{
  ...
  "scripts": {
    "build": "tsc",
    "start": "node build/index.js",
    "dev": "nodemon --exec ts-node src/index.ts"
  }
  ...
}
```
- npm run build: tsconfig.json 파일에서 include (src) 설정한 경로의 파일들을 outDir (build) 경로에 컴파일한다.
- npm run start: 컴파일된 build 폴더의 index.js 파일을 실행한다. 운영(Production) 환경
- npm run dev: ts-node 모듈을 통해 js 파일로 컴파일없이, ts 파일을 실행시킨다. 개발(Dev) 환경