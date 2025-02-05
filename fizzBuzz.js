function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
      let fizzBuzz = ''
      if ((i/3) % 1 === 0) fizzBuzz += 'Fizz';
      if ((i/5) % 1 === 0) fizzBuzz += 'Buzz';
      console.log(fizzBuzz || i)
  }
}