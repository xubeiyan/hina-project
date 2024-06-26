import { json } from '@sveltejs/kit';

import { length, order } from '$lib/codeWordOrder.js';
import { codeWords } from '$lib/codeWords.js';
// 保存新的表单
export const POST = async ({ request }) => {
    const { content, endTime } = await request.json();

    let nextLength = 1859 * 1859 * 1859 * 1859 - 1;
    let lengthOrder = [0, 0, 0, 0];
    lengthOrder[3] = codeWords[order[3][nextLength % length]];
    nextLength = Math.floor(nextLength / length);
    lengthOrder[2] = codeWords[order[2][nextLength % length]];
    nextLength = Math.floor(nextLength / length);
    lengthOrder[1] = codeWords[order[1][nextLength % length]];
    nextLength = Math.floor(nextLength / length);
    lengthOrder[0] = codeWords[order[0][nextLength % length]];
    
    return json({content, endTime, visitCode: `${lengthOrder.join('-')}`}, {status: 201})
}