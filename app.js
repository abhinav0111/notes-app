// const validator = require('validator')
// const getNotes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)

// console.log(validator.isURL('https/mead.io'))

// const chalk = require('chalk')
// console.log(chalk.blue('Success'))  

const chalk = require('chalk')
// const { command } = require('yargs')
const yargs = require('yargs')
const { addnote } = require('./notes.js')
const notes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)

// console.log(chalk.green('Hello world!'));
// const k = console.log
// k(chalk.bgRed.bold('hii'))
// k(chalk.inverse.green.bold('Success!'))
// k(chalk.inverse.blue.bold('Success!'))

// console.log(process.argv[2])
// console.log(process.argv)
// console.log(yargs.argv)
// const cmd = process.argv[2]
// if (cmd == 'add') {
//     console.log('adding note')
// } else if (cmd == 'remove') {
//     console.log('removed')
// }

yargs.version('1.1.0')

//Adding a command 
yargs.command({
    command: 'add',
    describe: 'Add a new notes bro!!',
    builder: {
        title: {
            describe: 'Name of the title',
            demandOption: true,
            type: 'stirng'

        },
        body: {
            describe: 'this is body',
            demandOption: true,
            type: 'stirng'
        }
    },
    handler: function (argv) {
        console.log("Note added", argv.title, argv.body)
        const k = notes.addnote(argv.title, argv.body)
        console.log(k)
    }
})

//removing command

yargs.command({
    command: 'remove',
    describe: 'remves note',
    builder: {
        title: {
            describe: 'title that is removed',
            demandOption: true,
        },
        body: {
            describe: 'body for removal id'
        }
    },
    handler(argv) {
        console.log('removing the node')
        notes.removenotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'list',
    describe: 'lists all the notes',
    handler() {
        console.log("lists the notes")
        notes.listnotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'reads all the notes',
    bulider: {
        title: {
            describe: 'reads the given title',
            demandOption: true,
        },
    },
    handler(argsv) {
        console.log("read the notes")
        notes.findnote(argsv.title)
    }
})

yargs.command({
    command: 'learn',
    description: 'learn whats init',
    builder: {
        title: {
            describe: 'this is title',
            demandOption: false,
            type: 'string'
        },
        subject: {
            describe: 'this is subject',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Subject : ' + argv.subject)
    }
})

yargs.argv


