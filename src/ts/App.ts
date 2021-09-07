import { element } from "./view/html-util";

export class App {
    constructor() {
        console.log("App initialized");
    }

    mount() {
        const formElement = document.querySelector("#js-form");        
        // valueプロパティ使用のため型アサーション
        // HTMLInputElement型はHTMLElementを継承し、valueプロパティを持つ.
        const inputElement = <HTMLInputElement>document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("js-todo-count");


        formElement!.addEventListener("submit", (e) => {
            // submitイベントの本来の動作(URLにフォーム内容を送信)を止める. 
            e.preventDefault();
            console.log(`入力値の値: ${inputElement.value}`);

            // 追加するTodoアイテムの要素(li要素)の作成
            const todoItemElement = element`<li>${inputElement.value}</li>`;

            // Todoアイテムをcontainerに追加

            // Todoアイテム数を+1し、表示されているテキストを更新する

            // 入力欄を空文字にしてリセットする.
            inputElement.value = "";
        }) 
    }
}