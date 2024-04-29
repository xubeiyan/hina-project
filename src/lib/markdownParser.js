// html转换
const htmlEscapeSeq = (stringWithSpecialChar) => {
    let div = document.createElement('pre');
    let text = document.createTextNode(stringWithSpecialChar);
    div.appendChild(text);
    return div.innerHTML;
}

// 增加行内样式
// **...** => <strong>...</strong>
// *...* => <em>...</em>
// `...` => <code>...</code>
const lineParse = (lineText) => {
    lineText = lineText.replace(/\*\*(.*?)\*\*/, '<strong>$1</strong>');
    lineText = lineText.replace(/\*(.*?)\*/, '<em>$1</em>');
    lineText = lineText.replace(/`(.*?)`/, '<code class="bg-slate-100 p-1 rounded-md">$1</code>')
    return lineText;
}

// 
const parse = (source) => {
    const sourceSplit = source.split('\n');
    // 在注释区域
    let IN_COMMENT = false;
    // 在选择部分
    let IN_RADIO = false;
    let RADIO_INDEX = 1;
    // 在多选部分
    let IN_CHECKBOX = false;
    let CHECKBOX_INDEX = 1;
    let out = '';
    for (let line of sourceSplit) {
        // 空行直接跳过
        if (line == '') {
            out += `<p></p>`;
            IN_RADIO = false;
            IN_CHECKBOX = false;
            // console.log('空行');
            continue;
        };

        // 判断此行是否是注释
        if (IN_COMMENT && line.substring(0, 2) == '*/') {
            IN_COMMENT = false;
            continue;
        } else if (IN_COMMENT || line.substring(0, 2) == '/*') {
            IN_COMMENT = true;
            // console.log('行注释');
            continue;
        } else if (line.substring(0, 2) == '//') {
            continue;
        }

        // 判断此行是否 title
        if (line.substring(0, 1) == '#' && line.substring(1, 2) == ' ') {
            const text = lineParse(htmlEscapeSeq(line.substring(2)));
            out += `<h1 class="text-3xl my-2">${text}</h1>`;
            continue;
        } else if (line.substring(0, 2) == '##' && line.substring(2, 3) == ' ') {
            let text = lineParse(htmlEscapeSeq(line.substring(3)));
            out += `<h2 class="text-2xl my-2">${text}<h2>`;
            continue;
        } else if (line.substring(0, 3) == '###' && line.substring(3, 4) == ' ') {
            let text = lineParse(htmlEscapeSeq(line.substring(4)));
            out += `<h3 class="text-xl my-2">${text}<h3>`;
            continue;
        }

        // 判断此行是否选择
        if (IN_RADIO && line.substring(0, 3) !== '( )') {
            IN_RADIO = false;
            RADIO_INDEX += 1;
            // 无需continue
        } else if (line.substring(0, 3) == '( )') {
            IN_RADIO = true;
            let id = `radio${RADIO_INDEX}`;
            let text = lineParse(htmlEscapeSeq(line.substring(3)));
            out += `<label class="flex gap-2 items-center pl-4 my-2">
            <input type="radio" name="${id}" class="size-8" />
            ${text}</label>`;
            continue;
        }

        // 判断此行是否多选
        if (IN_CHECKBOX && line.substring(0, 3) !== '[ ]') {
            IN_CHECKBOX = false;
            CHECKBOX_INDEX += 1;
            // 无需continue
        } else if (line.substring(0, 3) == '[ ]') {
            IN_CHECKBOX = true;
            let id = `checkbox${CHECKBOX_INDEX}`;
            let text = lineParse(htmlEscapeSeq(line.substring(3)));
            out += `<label class="flex gap-2 items-center pl-4 my-2">
            <input type="checkbox" name="${id}" class="size-8" />
            ${text}</label>`;
            continue;
        }

        let text = lineParse(htmlEscapeSeq(line));
        out += `<p class="text-md my-1">${text}</p>`;
    }
    return out;
}

export { parse };