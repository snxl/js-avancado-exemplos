const events = require("events")

const event = new events()

let compare = undefined

let dataCompare = undefined

initial()

event.once("dataReceived", ()=>{
    process.stdout.write("\nDigite um número para comparar :")

    process.stdin.once("data", (data)=>{
        dataCompare = Number(data)
        process.exitCode
        event.emit("dataTerminal")
        process.exit()
    })
})

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

function initial(){
    process.stdout.write("Digite um número :")

    process.stdin.once("data", (data)=>{
        compare = Number(data)
        process.exitCode
        event.emit("dataReceived")
    })
}