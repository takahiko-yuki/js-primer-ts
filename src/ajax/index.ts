console.log("index.js: loaded");

// CSSセレクタ DOMツリー上のh2要素を取得
const heading = document.querySelector("h2");

// h2要素に含まれるテキストコンテンツ
const headingText = heading?.textContent;

// button要素
const button = document.createElement("button");
button.textContent = "Push Me";

// body要素の子要素としてbuttonを挿入
document.body.appendChild(button);