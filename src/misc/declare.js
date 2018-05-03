const fs = require('fs');
const path = require('path');

const INTERFACE_BASENAME = 'Coating';
const METHOD_NAME = 'coating'
const MAX_ARGS_LENGTH = 16;
const ARGS_PREFIX = 'arg';
const ARGS_TYPENAME_PREFIX = 'T';
const RETURN_TYPENAME = 'R';
const INDENT = '    ';

const target = fs.createWriteStream(process.argv[2], {
    encoding: 'utf-8'
});

let rest = [];

function appendRest(content) {
    rest.push(content);
}

function main() {
    const l = fs.createReadStream(path.join(__dirname, '..', '..', 'LICENSE'));
    target.write('/**\n', () => {
        l.pipe(target, { end: false });
    });
    l.on('end', () => {
        appendRest('**/\n\n');
        for (let i = 1; i <= MAX_ARGS_LENGTH; i++) {
            writeInterface(i);
        }
        for (let i = 1; i <= MAX_ARGS_LENGTH; i++) {
            writeMethod(i);
        }
        appendRest(`declare function ${METHOD_NAME}(func: Function, thisArg?: any): Function;\n`);
        appendRest(`\nexport = coating;\n`);
        target.write(rest.join(''), () => target.close());
    });
}

function writeGeneric(start, length) {
    appendRest('<');
    const end = start + length - 1;
    for (let i = start; i <= end; i++) {
        appendRest(ARGS_TYPENAME_PREFIX + i + ', ');
        if (i == end) {
            appendRest(RETURN_TYPENAME);
        }
    }
    appendRest('>');
}

function writeInterfaceName(start, length) {
    appendRest(INTERFACE_BASENAME + length);
    writeGeneric(start, length);
}

function writeArgs(length) {
    for (let j = 1; j <= length; j++) {
        appendRest(ARGS_PREFIX + j);
        appendRest(': ');
        appendRest(ARGS_TYPENAME_PREFIX + j);
        if (j != length) {
            appendRest(', ')
        }
    }
}

function writeInterface(argsLength) {
    appendRest('interface ');
    writeInterfaceName(1, argsLength);
    appendRest(' {\n');
    for (let i = 1; i <= argsLength; i++) {
        appendRest(INDENT);
        appendRest('(');
        writeArgs(i);
        appendRest('): ');
        if (i != argsLength) {
            writeInterfaceName(i + 1, argsLength - i);
        } else {
            appendRest(RETURN_TYPENAME);
        }
        appendRest(';\n');
    }
    appendRest('}\n\n');
}

function writeMethod(argsLength) {
    appendRest(`declare function ${METHOD_NAME}`);
    writeGeneric(1, argsLength);
    appendRest('(func: (');
    writeArgs(argsLength);
    appendRest(`) => ${RETURN_TYPENAME}`);
    appendRest(', thisArgs?: any): ');
    writeInterfaceName(1, argsLength);
    appendRest(';\n');
}

main();
