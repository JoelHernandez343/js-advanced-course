window.addEventListener('load', () => {
  let muted: boolean = true;
  let people: (string | number)[] = [];
  people = ['Hello world', 1];
});

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return a + b;
  };
}
