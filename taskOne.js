const library = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']

let input = 'programmerit'
let change = input
let getChart = 0
let whitelist = []
let output = ''
let temporary = ''
let jung = ''
let validation = input.slice(0, 2)

for (let i = 0; i < library.length; i++) {
    getChart = change.search(library[i])
    if (getChart >= 0) {
        whitelist.push(library[i])
    }
}

for (let l = 0; l < whitelist.length; l++) {
    jung = library[l]
    for (let i = 0; i < whitelist.length; i++) {
        temporary = jung + whitelist[i]
        getChart = change.search(temporary)

        if (jung.search(validation) >= 0) {
            if (i == 0) {
                output += '\n' + jung
            }
            if (getChart >= 0) {
                jung += whitelist[i]
                output += ' ' + whitelist[i]
            }
        }
    }
    jung = ''
}
console.log(output)

