const dogs=[{name:'Oreo',age:2},{name:'Tommy' ,age:3},{name:'Parle',age:4}];

function makeGreen(){
    const p=document.querySelector('p');
    p.style.color='#BADA55';
    p.style.fontSize='50px';
}

//regular
console.log('Hello');

//interpolated
console.log('Hello I am a %s string!','💩');

//styled
console.log('%c I am some great text','font-size:50px; backgorund: black; text-shadow:10px 10px 0 yellow')

//warning!
console.warn('Oh Noo!!');

//Error!
console.error('Shit!');

//info
console.info('Crocodiles eat 3-4 people per year');

//testing
const p=document.querySelector('p');
console.assert(p.classList.contains('Ouch'),'That is wrong!');

//clearing
console.clear();

//Veiw DOM elements
console.log(p);
console.dir(p);

console.clear();

//Groupin together
dogs.forEach(dog =>{
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});

//counting
console.count('sunday');
console.count('sunday');
console.count('sunday');
console.count('sunday');
console.count('sunday');

//timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(data=>data.json())
.then(data=>{
    console.timeEnd('fetching data');
    console.log(data);
});

//table
console.table(dogs);