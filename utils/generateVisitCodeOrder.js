import { codeWords } from '../src/lib/codeWords.js';
import fs from 'fs';

const shuffleArray = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
const len = codeWords.length;

const originArr = Array.from({ length: len }, (_, index) => index);

const content = `const order = [
[${shuffleArray(originArr).toString()}], 
[${shuffleArray(originArr).toString()}],
[${shuffleArray(originArr).toString()}],
[${shuffleArray(originArr).toString()}]
];
const length = ${len};
export {order, length};
`;

fs.writeFile('./src/lib/codeWordOrder.js', content, err => {
    if (err) { console.log(err); return; }
    console.log('File created and content written successfully!');
});
