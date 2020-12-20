const { log } = console;

const {randomColor} = require("./colors");

log("Enter number of rows: ");
const stdin = process.openStdin();

const generateTree = (rows, starts) => {
    if(starts <= rows) {
        let startsText = ''
        let extraSpaces = 0;
        if(starts > 1) {
            extraSpaces = starts-1;
        }
        for (let start = 0; start < starts+extraSpaces; start++) {
            startsText += '*'
            if(start+1 % 2 !== 0) {
                startsText += ' '
            }
        }
        let spacesLine = parseInt((rows-starts), 10);
        let spacesText = ''
        for (let spaces = 0; spaces < spacesLine; spaces++)
            spacesText += '  '
        log('\x1b[36m%s\x1b[0m', `${spacesText}${startsText}`)
        generateTree(rows, starts+1) // recursive call to function
    } else {
        let spacesText = ''
        for (let spaces = 0; spaces < parseInt(rows+rows, 10)-2; spaces++)
            spacesText += ' '
        log('\x1b[36m%s\x1b[0m', `${spacesText}|`)

        return;
    }
}

stdin.addListener("data", d => {
    generateTree(parseInt(d, 10), 1)
    process.exit()
});

