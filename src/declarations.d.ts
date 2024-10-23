declare module "*.gif" {
  const value: string;
  export default value;
}

declare module NodeJS {
  interface Require {
    context: (path: string, deep?: boolean, filter?: RegExp) => any;
  }
}
