const { log } = console;

const colorize = (color, output) => {
    return ['\033[', color, 'm', output, '\033[0m'].join('');
}

const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min; 
}

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
        
        return `${spacesText}${colorize(getRandomArbitrary(90,95), startsText)}\n`+generateTree(rows, starts+1) // recursive call to function
    } else {
        let spacesText = ''
        for (let spaces = 0; spaces < parseInt(rows+rows, 10)-2; spaces++)
            spacesText += ' '
        return `${spacesText}${colorize(94, "|")}\n`;
    }
}


log("Enter number of rows: ");
const stdin = process.openStdin();

stdin.addListener("data", d => {
    setInterval(() => {
        process.stdout.write('\u001B[2J\u001B[0;0f');
        process.stdout.cursorTo(0);
        process.stdout.write(generateTree(parseInt(d, 10), 1))
    },1500)
});

