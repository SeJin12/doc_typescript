type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else console.log(config.path);
};

type Adds = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const adds: Adds = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
