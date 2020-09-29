var fs = require('fs');
// var name = 300;

// var apple =300;

// function usedirectory(){
//     console.log('나는 바보다');
//     return console.log("s너");
// };

// usedirectory();

// if (name > 500){
//     console.log(`df`);
// } else if (apple = 30){
//     console.log(1lskdfj)
// } else{
//     console.lof(`sl;dfk`)
// }

// var mychoice = 3;

// switch(mychoice){
//     case 1:
//         console.log(`sdf`)
//         break;
//     case 2:
//         console.log(`sdff`)
//         break;
//     case 3:
//         console.log(`sdklfj`)
//     default:
//         console.log(`l;kllkl`)
// }


// for (let i =1; i>10; i++){
//     console.log(`dslf`);
// }

// var apple=300;
// while (apple% 7 !== 0){
//     apple++;
// }

// let credit = {
//     name: 100,
//     'born year': name

// }

// let key={
//     ma,e
// }

// for (let k in key){

// }
 
// '   Hello world'.trim()

// "hello world".

var body = {
    setColor: function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor', color);
},
    setBackgroundcolor: function(color){
    // document.querySelector('body').style.color=color;
    $('body').css('color', color);

}

}


function setColor(color1){
//     var keys = {
//             target: document.querySelector('body'),
//             alist: document.querySelectorAll('a')};
//     var i =0;
//     while (i < keys.alist.length){
//         keys.alist[i].style.color=color1;
//         i++;}
// }
        // jquery
        $('a').css('color',color1);}      
function nightDayHandler(self){
    var keys = {
            target: document.querySelector('body'),
            alist: document.querySelectorAll('a')};
        if (self.value === 'night'){
            body.setColor('black');
            body.setBackgroundcolor('white');
            self.value = 'day';
            
            setColor('green')    
        
        
        } else{
            body.setColor('white');
            body.setBackgroundcolor('black');
            self.value = 'night';

            setColor('blue')
        }}

// var es = {
//     name: 'shin',
//     name1: function sdfds(){
//         console.log('hi'+this.name);
//     }
// };
// es.name1();

// sum = function (a,b, callback) {
//     let result = a+b;
//     callback(result);
// }
// sum(1,2,function(res){
//     console.log(res);
// })



// fs.readFile('hellotex3t.txt', (err,data)=>{
//     if(err){
//         throw err;
//     };
//     console.log(data)
// })

// const text = 'write Test'
// fs.writeFile('hello.txt', text, 'utf-8', (err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data)
// })

// function SoccerPlayer(name, position) {
//     this.name = name;
//     this.postition = position;
//     this.whatIsYourName = function (){
//         console.log( `My name is ${this.name}`);
//     };
// }

// var player = new SoccerPlayer('park', 'wind');
// console.log(player.whatIsYourName)

// const EventEmitter = require('events')

// const myEvent = new EventEmitter();


// myEvent.on('방문',()=>{
//     console.log('ㄳ')
// })

// myEvent.emit('방문');

// console.log(myEvent.listenerCount('방문'));