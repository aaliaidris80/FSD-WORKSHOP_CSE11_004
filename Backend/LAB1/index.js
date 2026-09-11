import EventEmitter from "node:events";
const myEmitter = new EventEmitter();
myEmitter.on("greet", (teacher)=>{
    console.log(`class started by ${teacher}`)
});
myEmitter.on("exit", (teacher)=>{
  console.log(`class finished by ${teacher}`)  
});
myEmitter.emit("greet", "Mr.Smith");
myEmitter.emit("exit", "Mr.Smith");