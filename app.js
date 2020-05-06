const yargs = require('yargs')
const notes = require('./notes')

// Customize Package Version
yargs.version('1.1.0')

// Add Command
yargs.command({
    command: 'add',
    describe: 'Add a New Note',
    builder :{
        title:{
            describe: 'Note Title',
            demandOption: true, 
            type: "string"
        },
        body:{
            describe: 'Note Content',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})
// Remove Command 
yargs.command({
    command : 'remove',
    describe : 'Remove a Note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
// List Command 
yargs.command({
    command: 'list',
    describe: 'List of Note',
    handler(){
        notes.listNote()
    }
})
// Read Command 
yargs.command({
    command: 'read',
    describe: 'Read a Note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


yargs.parse()
// console.log(yargs.argv)