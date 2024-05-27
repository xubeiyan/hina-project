const examples = 
`/* all in DASH ASTER and ASTER DASH are multi-line comments
// this is a single line comment

# Title 1
// **...** means bold
something introduce your **questionnaire**

## Title 2
// *...* means italic
*another thing* you want to say

### Title 3
` +
"// `...` means inline monospace font, like code \n"
+ "`// Only god knows what the code do...`"
+ `
// () is selection
1. male or female?
( ) male
( ) female

// [] is check box
2. Sports you like:
[ ] Tennis
[ ] Skies
[ ] Table tennis

*/

# 一级标题
这个调查非常**重要**！！！
## 二级标题
*其实*也没有这么***重要***
### 三级标题
` + 
"`// code is not your life`\n" + 
"life is like `code` "
+ `
1. 太阳会发光吗？
( ) 会的
( ) 不会
( ) 我不知道

2. 月亮在哪些时段出现在天上？
[ ] 上午
[ ] 下午
[ ] 晚上

3. 你认为吃{___}可以变身狼人？

4. 让我们对下暗号吧。Ping！
{___}
`;

export { examples };