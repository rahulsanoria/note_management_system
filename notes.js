const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title , body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note)=>note.title === title)
    const duplicateNote = notes.find((note)=>note.title === title)
    // console.log(duplicateNote)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New Note Save Successfully "))
    }else{
        console.log(chalk.red.inverse("Note Title Taken !"))
    } 
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote =  (title) => {
    const notes = loadNotes()
    const noteToSave = notes.filter((note) =>note.title !== title)
    if (notes.length > noteToSave.length){
        console.log(chalk.green.inverse('Note Removed Successfully..!'))
        saveNotes(noteToSave)
    }else{
        console.log(chalk.red.inverse('Not Found ..!'))
    }
 }

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(chalk.inverse.green(note.title))
    })  
}

const readNote = (title) => {
    const notes = loadNotes()
    const requiredNote = notes.find((note) => (note.title) === title)  
    if (requiredNote){
        console.log(chalk.inverse.green("Title : " + requiredNote.title))
        console.log(chalk.inverse.blue("Body : " + requiredNote.body))
    }else {
        console.log(chalk.inverse.red('No Note Found ..!!'))
    }
    
}
 
module.exports = { 
    addNotes : addNotes,
    removeNote: removeNote,
    listNote: listNotes,
    readNote: readNote
}