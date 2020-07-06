const user = {
   name: 'Mango',
   age: 20,
   hobby: 'html',
   premium: true,
};

user.mood = 'happy';
user.hobby = "skydiving";
user.premium = true;

for (const option in user) {
   console.log(option, user[option])
}

console.log(user);