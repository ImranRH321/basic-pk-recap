function anaToVori(ana) {
  const vori = ana / 16;
  return vori;
}
const ana = anaToVori(64);
// console.log(ana);

// 2. problem

const pandaCost = (singera, somosa, jilapi) => {
  const oneSangera = 7 * singera;
  const oneSamosa = 10 * somosa;
  const oneJilapi = 15 * jilapi;

  const totalCost = oneJilapi + oneSamosa + oneSangera;
  return totalCost;
};

const total = pandaCost(2, 5, 1);
// console.log(total);


// problem 3
const picnicBudget = picnic => {
  const firstOne = 5000;
  const secondOne = 4000;
  const thirdOne = 3000;
  if (picnic <= 100) {
    const firstBudget = firstOne * picnic;
    return firstBudget;
  } else if (picnic <= 200) {
    const fistPerson = firstOne * 100;
    const firstBudget = picnic - 100;
    const secondBudget = firstBudget * secondOne + fistPerson;
    return secondBudget;
  } else {
    const firstBudget = firstOne * 100;
    const secondMan = secondOne * 100;
    const secondBudget = picnic - 200;
    const thirdBudget = secondBudget * thirdOne;
    const total = firstBudget + secondMan + thirdBudget;
    return total;
  }
};

// console.log(picnicBudget(203));


// problem 4 
const friends = ['taniya', 'jamila', 'alone', 'akbal', 'porida'] 

const oddFriend = friends => {
    const sum = []; 
   for(const friend of friends){
       if(friend.length % 2 == 1){
         sum.push(friend)
       }
   }    
   return sum;
}

const x = oddFriend(friends) 
// console.log(x);


// other 
const persons = ['taniya', 'jamila', 'alone', 'akbal', 'porida'] 

// const dublicate = friends => {
//     const sum = []; 
//    for(const friend of friends){
//       if(sum.indexOf == -1)
//    }    
//    return sum;
// }

const y = dublicate(persons)
console.log(y);