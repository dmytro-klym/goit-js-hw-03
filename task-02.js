const user = {
   name: "Mango",
   age: 20,
   hobby: "html",
   premium: true,
};

const user2 = {
   name: "Mango",
   age: 20,
   hobby: "html",
   premium: true,
   height: 180
};

const countProps = function (obj) {
   let count = 0;
   for (let i in obj) {
      count += 1;
   }
   return count;
};

console.log(countProps(user));
console.log(countProps(user2));







































