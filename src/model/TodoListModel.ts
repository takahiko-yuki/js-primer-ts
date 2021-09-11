import { EventEmitter } from "../ts/EventEmitter";

export class TodoListModel extends EventEmitter {

    items :[];

    /**
     * @param items 初期アイテム一覧（デフォルトは空の配列）
     */
    constructor(items: []) {
        super();
        this.items = items;
    }

    /**
     * TodoItemの合計個数を返す
     * @returns {number}
     */
    getTotalCount() : number {
        return this.items.length;
    }

    /**
     * 表示できるTodoItemの配列を返す
     * @returns []
     */
    getTodoItems() : [] {
        return this.items;
    }

    /**
     * TodoListの状態が更新されるたきに呼び出されるリスナー関数を登録する
     * @param {EventListener} listener 
     */
    onChange(listener: EventListener) {
        this.addEventListener("change", listener)
    }

    /**
     * 状態が変更されたときに呼ぶ。登録済みのリスナー関数を呼び出す
     */
    emitChange() {
        this.emit("change");
    }

    /**
     * TodoItemを追加する
     * @param {TodoItemModel} todoItem 
     */
    addTodo(todoItem: string) {
        this.items.push(todoItem);
        this.emitChange();
    }
}