module.exports = function getZerosCount(number, base) {
  let num = number;
  let result = 0;

  let divider = getDivider(base);

  function getDivider(numeralSystem) {

    let n = numeralSystem;

    for ( let a = 2; a <= n; a++) {

      for (let i = 2; i < n; i++) {

        if(n % i == 0) {
          n /= i;
          break;
        }

      }

    }
    //console.log(n);
    return n;
  }


  while(num > 0)
  {
    num /= divider;
    result += Math.floor(num);
  }

  return result;
}
