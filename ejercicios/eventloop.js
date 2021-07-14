const main = () => {
  setTimeout(() => console.log('Set time out'), 0);
  Promise.resolve('Promise 1').then(msg => {
    let i = 0;

    while (i < 10_000_000_000) {
      i++;
    }
    console.log(msg);
  });
  Promise.resolve('Promise 2').then(msg => console.log(msg));
  console.log('The end');
};

main();

let i = 0;
while (i < 10_000_000_000) {
  i++;
}
console.log('The end 2');
