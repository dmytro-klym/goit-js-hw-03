const products = [
   { name: 'Радар', price: 1300, quantity: 4 },
   { name: 'Сканер', price: 2700, quantity: 3 },
   { name: 'Дроїд', price: 400, quantity: 7 },
   { name: 'Захоплення', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (arr, productName) {
   let totalCost = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === productName) {
         totalCost += arr[i].price * arr[i].quantity;
      }
   }
   return totalCost;
};

console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроїд'));

console.log(calculateTotalPrice(products, 'Сканер'));

console.log(calculateTotalPrice(products, 'Захоплення'));