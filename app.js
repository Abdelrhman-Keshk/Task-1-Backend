const yargs = require('yargs')
const handlers = require('./handlers')

yargs.command({
    command: "add",
    describe: "to add a person",
    builder: {
        id:{
            describe: "The person id",
            demandOption: true,
            type: "string"
        },
        fname:{
            describe: "The person first name",
            demandOption: true,
            type: "string"
        },
        lname:{
            describe: "The person last name",
            demandOption: true,
            type: "string"
        },
        age:{
            describe: "The person age",
            type: "string"
        },
        city:{
            describe: "The person city",
            type: "string"
        }
    },
    handler: (argv) => {
        handlers.addPerson(argv.id, argv.fname, argv.lname, argv.age, argv.city)
    }
})

yargs.command({
    command: "readAll",
    describe: "to read all data",
    handler: () => {
        handlers.readAllData()
    }
})

yargs.command({
    command: "read",
    describe: "to read data for a specific person",
    builder: {
        id: {
            describe : "The id of the person whose data you want to read",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        handlers.readData(argv.id)
    }
})

yargs.command({
    command: "deleteAll",
    describe: "to delete all data",
    handler: () => {
        handlers.deleteAllData()
    }
})

yargs.command({
    command: "delete",
    describe: "to delete data for a specific person",
    builder: {
        id: {
            describe : "The id of the person whose data you want to delete",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        handlers.deleteData(argv.id)
    }
})

yargs.parse()

