const fs = require('fs')
const chalk = require('chalk')
const { stringify } = require('querystring')
const { title } = require('process')
const getNotes = () => {
    return 'Your notes...'
}


const addnote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((notes) => notes.title === title)
    const duplicateNote = notes.find((note) => note.title === title)      // gives you boolean

    // const duplicateNotes = notes.filter(function (notes) {
    //     return notes.title === title
    // })
    if (!duplicateNote) {
        // if (duplicateNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        return 'New note taken'
    }
    else {
        return 'Note title taken'
    }

}


const saveNotes = (notes) => {
    const dJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    }
    catch (e) {
        return []
    }
}


const removenotes = (title, body) => {
    console.log(title + " " + body + ' this should removed')
    const k = JSON.parse((fs.readFileSync('notes.json')).toString())
    console.log(k)
    const z = k.filter(function (k) {
        return k.title === title
    })
    if (z.length == 0) {
        console.log(chalk.red.inverse.bold("no note like this"))
    }
    else {
        console.log(chalk.green.inverse.bold("Note found !!"))
        const l = k.filter(function (k) {
            return k.title != title

        })
        console.log(l)
        m = JSON.stringify(l)
        console.log(m)
        fs.writeFileSync('notes.json', m)
    }

}
const listnotes = () => {
    // try {
    const k = fs.readFileSync("notes.json").toString()
    const z = JSON.parse(k)
    z.forEach((z) => {
        console.log("Notes title : " + chalk.blue.bold(z.title) + " Body : " + chalk.yellow.bold(z.body))
        console.log()

    });

    // }
    // catch (e) {
    //     console.log("Zero lists present")
    //     return []
    // }

}

const findnote = (title) => {
    const k = loadNotes()
    const z = k.find((z) => z.title === title)
    if (z) {
        console.log("Title is : " + chalk.blue(z.title) + " Body is " + z.body)
    }
    else {
        console.log("no note found")
    }
    // const duplicateNotes = notes.filter((notes) => notes.title === title)
}



module.exports = {
    getNotes: getNotes,
    addnote: addnote,
    removenotes: removenotes,
    listnotes: listnotes,
    findnote: findnote
}