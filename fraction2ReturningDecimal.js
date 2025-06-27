// console.log("0.0012300123".replace(/(\d*\.\d*?)\1+/g, "($1)").replace(/(\w+?)\1+/g, "($1)").replace(/\).*/, ')'));

console.log(1/90)
const repeated = "0.0012300123".match(/(\d+)\1+/g)[0].match((/^(.+?)\1+$/))[1];
const replaced = "0.0012300123".replace(/(\d+)\1+(.*)/g, `(${repeated})`);
console.log(replaced);