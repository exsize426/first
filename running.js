
    // arr.forEach((a,b,c) => console.log(`Элемент${a},номер индекса${b},массив${c}`));
// console.log(arr.indexOf(3,3))
// console.log(arr.includes(56))
//console.log(arr.includes(NaN))
// let arr2 = arr.find((item) => item> 4) // ф-я ищет item  через условие колбек, и первое найденное выведет, если нет соответствий то underfined
//let arr2 = arr.findIndex((item) => item> 5);// ф-я ищет item  через условие колбек, и первое найденное значение выведет его индекс
// let arr2 = arr.filter((item) => item > 4) вернет массив и запихнет туда все подходящие элементы значению item > 4 иначе пустой массив 
//let arr2 = arr.map((item) => item**2) вернет [] с новыми значениями item**2 , но основной массив останется прежним
//let arr2 = arr.sort((item,item1) =>item1 - item ) сортирует [] от большего к меньшего, если arr.sort() изменит его по рангу (1,135,14,2,21)
//let resault = arr3.reverse(); меняет значения [] наоборот
//let string = 'privet';let resault = string.split('',3); разобьет строку на буквы и сократит до "pri"
//let resault = arr.join(':') разбивает [] в строку и делит элементы по знаку аргумента(':')
/*let resault = arr3.reduce((sum,item,) => sum  - item,) --- тут reduce вычтет все элементы массива
let resault = arr3.reduce((sum,item,) => sum  + item,0) --- тут sum принимает 0 и складывает с item далее записывает в sum и снова прибавляет следующее item*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    
  };
  
  function sumSalaries(obj){
      let start = 0;
    for(let key of Object.values(salaries)) {
       start += key;
    }
    
      return start;
    
  }
  
  console.log( sumSalaries(salaries) ); // 650

  let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

let resault = JSON.stringify(user,null,2)

console.log(resault)


function one (a,b){
     
    return function (item){
      return a<= item && item <=b;
       
  }
  }
  let arr = [1, 2, 3, 4, 5, 6, 7];
  
  
  
  console.log((one(3,6)))
  console.log(arr.filter(one(3,6)))