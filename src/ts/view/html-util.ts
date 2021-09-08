/**
 * HTML特殊文字を置換する
 * @param {string} str 
 * @returns {string}
 */
export function escapeSpecialChars(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&qt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        ;
}

/**
 * HTML文字列からHTML要素を作成して返す.
 * @param {string} html 
 * @returns {string}
 */
export function htmlToElement(html: string): Element {
    const template = document.createElement("template");
    template.innerHTML = html;
    return <HTMLElement>template.content.firstElementChild;
}

/**
 * HTML文字列から DOM Nodeを作成して返すタグ関数
 * @param {string} strings 
 * @param {string[]} values 
 * @returns string
 */
export function element(strings: TemplateStringsArray,  ...values: string[]): Element {

    const htmlString = strings.reduce((result: string, str: string, i: number) => {
        const value = values[i - 1];
        if (typeof value === "string") {
            return result + escapeSpecialChars(value) + str;
        } else {
            return result + String(value) + str
        }
    });

    return htmlToElement(htmlString);
}

// /**
//  * コンテナ要素の中身をbodyElementで上書きする
//  * @param bodyElement 
//  * @param containerElement 
//  */
// export function render(bodyElement: Elenet, containerElement) {
//     containerElement.innerHTML = "";
//     containerElement.appendChild(bodyElement);
// }