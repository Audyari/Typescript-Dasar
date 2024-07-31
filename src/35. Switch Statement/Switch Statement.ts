function sayHello(name: string): string {
  switch (name) {
    case "hello":
      return "Hello";
    case "world":
      return "World";
    default:
      return "makan";
  }
}

console.info(sayHello("hello"));
console.info(sayHello("world"));
console.info(sayHello("test"));
   




