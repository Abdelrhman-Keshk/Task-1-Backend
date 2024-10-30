const fs = require('fs')

const addPerson = (id, fname, lname, age, city) => {
    const data = loadData()
    const duplicatedData = data.find(obj => obj.id === id)
    if(duplicatedData){
        console.error("ERROR ID IS DUPLICATED")
    }else{
        data.push({id, fname, lname, age, city})
        saveData(data)
    }

}

const loadData = () => {
    try{
        const dataJson = fs.readFileSync("data.json").toString()
        return JSON.parse(dataJson)
    }catch{
        return []
    }
}

const saveData = (data) => {
    fs.writeFileSync("data.json", JSON.stringify(data))
}

const readAllData = () => {
    const data = loadData()
    console.log(data)
}

const readData = (id) => {
    const data = loadData()
    const personData = data.find((obj) => obj.id === id)
    if (personData) {
        console.log(personData)
    }else{
        console.error("ERROR ID NEEDED NOT FOUND")
    }
    
}

const deleteAllData = () => {
    const data = loadData()
    data.splice(0)
    saveData(data)
}

const deleteData = (id) => {
    const data = loadData()
    const index = data.findIndex(obj => obj.id === id)
    data.splice(index, 1)
    saveData(data)
}

module.exports = {
    addPerson,
    readAllData,
    readData,
    deleteAllData,
    deleteData
}