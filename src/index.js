module.exports = function reverse (n) {
    let res = parseInt(n.toString().split('').reverse().join(''));
 return res;
}
