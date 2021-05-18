const events = require("events")

const event = new events()

let compare = undefined

let dataCompare = undefined

async function waitForInitial() {
    while(true) {  
    await initial()
}
    
waitForInitial();

event.on("dataTerminal",()=>{
    promise()
})

const promise = (comparePromisse = compare, dataToCompare = dataCompare ) =>  new Promise((resolve, reject) =>{
    if(comparePromisse > dataToCompare){
        resolve(
            process.stdout.write(`${comparePromisse} é maior que ${dataToCompare}`)
        )
    }else if(comparePromisse == dataToCompare){
        resolve(
            process.stdout.write(`${comparePromisse} é igual a ${dataToCompare}`)
        )
    }else{
        reject(
            process.stdout.write(`O dado ${dataToCompare} é maior que ${comparePromisse}`)
        )
    }
})

async function initial(){
    process.stdout.write("Digite um número :")
    return new Promise((resolve, reject) => {
        process.stdin.once("data", (data)=>{
        compare = Number(data)
        process.exitCode
        event.emit("dataReceived")
    })
    event.once("dataReceived", ()=>{
        process.stdout.write("\nDigite um número para comparar :")

        process.stdin.once("data", (data)=>{
            dataCompare = Number(data)
            process.exitCode
            event.emit("dataTerminal")
            process.exit()
            resolve();
        })
})
    });
    
}
