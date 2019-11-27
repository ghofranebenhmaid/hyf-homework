let todo = [];
let myName = [];
let favoriteDish = [];
let events = [];
function getReply(command){
    let command1 = command.toLowerCase();
    if(command1.includes("hello my name is")) {
       let arr = command.split(" ");
        //myName[0] = arr.pop();
        myName[0]=arr[arr.length-1];
       
       return `Nice to meet you ${myName[0]}.`;
    }else if(command1.includes("what is my name")) {
        
        if (myName == undefined || myName.length == 0){
            return `I don´t know your name`
        }else{
            return `Your name is ${myName[0]}.`;
        }
    }else if(command1.includes("add") && command.includes("to my todo")){
       // let task = command1.replace(/add /g,"");
        //let task1 = task.replace(/ to my todo/g,"");
        //let arr = command.split(" ");
        //task = arr[1];
        let task = command.match(/(?<=dd\s+).*?(?=\s+to my todo)/gs);
        todo.push(task);
        return `${task} added to your todo`;

    }else if(command1.includes("remove") && command.includes("from my todo")){
        //let task = command1.replace(/remove /g,"");
        //let task1 = task.replace(/ from my todo/g,"");
        let task = command1.match(/(?<=remove\s+).*?(?=\s+from my todo)/gs);
        
        for( var i = 0; i < todo.length; i++){ 
            if ( todo[i] == task) {
              todo.splice(i, 1); 
              i--;
            }
         }
         return `${task} removed from your todo`;
    }else if(command1.includes("what is on my todo") ){
       let  numberTodos = todo.length;
       
       if (todo.length > 1) {
           let res = `you have ${numberTodos} todos - ${todo[0]}`;
           for (let i = 1; i < todo.length; i++) {
              let s = ` and ${todo[i]}`;
               res = res.concat(s);
            }
            return res;
        }else if (todo.length == 1) {
            let res = `you have ${numberTodos} todos - ${todo[0]}`;
            return res;
        }else if (todo.length == 0) {
            let res = `you have ${numberTodos} todos`;
            return res;
        }
        
    }else if(command1.includes("what day is it today") ){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    let date = new Date();
    let day=date.getDate();  
    let month=date.getMonth();  
    let year=date.getFullYear();  
    let res = `${day}. of ${months[month]} ${year}`;
    return res;

    }else if(command1.startsWith("what is") && /\d/.test(command1)){
        let math = command1.replace(/what is /g,"");
        let res = eval(math);
        return res;

    }else if(command1.includes("my favorite dish is")){
        let arr1 = command.split(" ");
        favoriteDish[0]=arr1[arr1.length-1];
        return `Ok`;

    }else if(command1.includes("what is my favorite dish")){

        if (favoriteDish == undefined || favoriteDish.length == 0){
        return `I don´t know your favorite dish`;
        }else{
        return `Your favorite dish is ${favoriteDish[0]}.`;
        }

    }else if(command1.startsWith("set a timer for") && /\d/.test(command1)){

        let time = command1.match(/(?<=set a timer for\s+).*?(?=\s+minute)/gs);
        time = eval(time);
        console.log (`Timer set for ${time} minutes`);
        time1 = time * 60 * 1000;
        setTimeout(myFunction, time1)

         function myFunction (){
            return `Timer done`;
         }

    }else if(command1.includes("add") && command.includes("to my calendar")){

        let name = command.match(/(?<=dd\s+).*?(?=\s+the)/gs);
        let date = command.match(/(?<=the\s+).*?(?=\s+to my calendar)/gs);
        events.push({'name': name, 'date': date});
        
        return `${name} added to your calendar the ${date}`;
    }else if(command1.includes("what am i doing this week")){
        
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let  message = `This week you have ${events.length} event:`;

        for (let i = 0; i < events.length; i++) {
            
            let str = events[i].date; // "3/5/2019"
            let arr = str.split('/'); // ["3", "5", "2019"]
            let d = eval(arr[0]);
            let m = eval(arr[1]);
            let y = eval(arr[2]);
            
            if(i==0){
                s = ` ${events[0].name} the ${d}. of ${months[m]} ${y}`;
                message = message.concat(s);
            }else{
                s = ` and ${events[i].name} the ${d}. of ${months[m]} ${y}`;
            }
            
        }
        return message;

    }
       
}

console.log(getReply("Hello my name is Ghofrane"));
console.log(getReply("What is my name"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 4 + 5"));
console.log(getReply("What is 4 / 5"));
console.log(getReply("My favorite dish is lasagne"));
console.log(getReply("What is my favorite dish?"));
console.log(getReply("Set a timer for 1 minutes"));
console.log(getReply("Add Bike ride the 3/5/2019 to my calendar"));
console.log(getReply("What am I doing this week?"));

