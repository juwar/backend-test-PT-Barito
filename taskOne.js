let library = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']
let input = 'programmerit'
let change = input
let getChart = 0
let whitelist = []
let output = ''
let temporary = ''
let junk = ''
let validation = input.slice(0, 2)

for (let i = 0; i < library.length; i++) {
    getChart = change.search(library[i])
    if (getChart >= 0) {
        whitelist.push(library[i])
    }
}

for (let l = 0; l < whitelist.length; l++) {
    junk = library[l]
    for (let i = 0; i < whitelist.length; i++) {
        temporary = junk + whitelist[i]
        getChart = change.search(temporary)
        if (junk.search(validation) >= 0) {
            if (i == 0 && change.search(junk) >= 0) {
                output += '\n' + junk
            }
            if (getChart >= 0) {
                junk += whitelist[i]
                output += ' ' + whitelist[i]
            }
        }
    }
    junk = ''
}
console.log(output)
