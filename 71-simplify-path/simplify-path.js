/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let stack = [];
    let curr = "";
    let newPath = `${path}/`;

    for (c of newPath) {
        if(c === '/') {
            if (curr === "..") {
                if(stack.length)stack.pop();
            }
            else if(curr != "" && curr != ".") {
                stack.push(curr);
            }
            curr = "";
        }
        else {
            curr += c;
        }
    }
    return "/" + stack.join("/");
};