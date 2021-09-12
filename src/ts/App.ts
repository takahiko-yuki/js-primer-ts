import { TodoListModel } from "../model/TodoListModel";
import { TodoItemModel } from "../model/TodoItemModel";
import { element, render } from "./view/html-util";

export class App {
    todoListModel: TodoListModel;

    constructor() {
        console.log("App initialized");
        // TodoList初期化
        this.todoListModel = new TodoListModel([]);
    }

    mount() {
        const formElement = document.querySelector("#js-form");        
        // valueプロパティ使用のため型アサーション
        // HTMLInputElement型はHTMLElementを継承し、valueプロパティを持つ.
        const inputElement = <HTMLInputElement>document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count");

        // TodoListModelの状態が更新されたら表示を更新する
        this.todoListModel.onChange(() => {
            // TodoリストをまとめるList要素
            const todoListElement = element`<ul />`;
            // それぞれのTodoItem要素をtodoListElement以下へ追加する
            const todoItems = this.todoListModel.getTodoItems();
            todoItems.forEach(item => {
                // 完了済ならchecked属性を付け、未完了ならchecked属性を外す
                const todoItemElement = item.completed
                    ? element`<li><input type="checkbox" class="checkbox" checked><s>${item.title}</s></li>`
                    : element`<li><input type="checkbox" class="checkbox">${item.title}</li>`;
                // チェックボックスがトグルしたときのイベントにリスナー関数を登録
                const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
                inputCheckboxElement?.addEventListener("change", () => {
                    // 指定したTodoアイテムの完了状態を反転させる
                    this.todoListModel.updateTodo({
                        id: item.id,
                        completed: !item.completed
                    });
                });

                todoListElement.appendChild(todoItemElement);
            })
            // containerElementの中身をtodoListElementで上書きする
            if (containerElement) {
                render(todoListElement, containerElement);
            }

            // アイテム数の表示を更新
            if (todoItemCountElement?.textContent) {
                todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
            }
        });

        // フォームを送信したら、新しいTodoItemModelを追加する
        formElement!.addEventListener("submit", (e) => {
            // submitイベントの本来の動作(URLにフォーム内容を送信)を止める. 
            e.preventDefault();
            // 新しいTodoItemをTodoListへ追加する
            this.todoListModel.addTodo(new TodoItemModel({
                title: inputElement.value,
                completed: false
            }));
            inputElement.value = "";
        }) 
    }
}