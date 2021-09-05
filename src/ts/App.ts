export class App {
    constructor() {
        console.log("App initialized");
    }

    mount() {
        const formElement = document.querySelector("#js-form");
        // valueプロパティ使用のため型アサーション
        // HTMLInputElement型はHTMLElementを継承し、valueプロパティを持つ.
        const inputElement = <HTMLInputElement>document.querySelector("#js-form-input");

        formElement!.addEventListener("submit", (e) => {
            // submitイベントの本来の動作(URLにフォーム内容を送信)を止める. 
            e.preventDefault();
            console.log(`入力値の値: ${inputElement.value}`);
        }) 
    }
}