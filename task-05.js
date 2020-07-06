const products = [
   { name: 'Радар', price: 1300, quantity: 4 },
   { name: 'Сканер', price: 2700, quantity: 3 },
   { name: 'Дроїд', price: 400, quantity: 7 },
   { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
   let properties = [];

   for (let product of arr) {
      for (let key in product) {
         if (key === prop) {
            properties.push(product[key]);
         }
      }
   }
   return properties;
};
console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'quantity'));
console.log(getAllPropValues(products, 'category'));