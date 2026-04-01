const nums = [1, 2 ,3];
const user ={ name:'John', city:'Riga' };
function greet(name) {
  if (true){console.log('Hi,' +name);}
  return { ok:true, nums: nums, user:user };
}
console.log(greet('Dan'));