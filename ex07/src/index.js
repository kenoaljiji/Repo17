const range = {
  max: 100.0,
  min: -25.0,
  num1: 17.5,
  num2: 88.8,
  avarage: 45.325,
};

const middle = ({ max, min }) => (max + min) / 2.0;

console.log(middle(range));

module.exports = middle;
