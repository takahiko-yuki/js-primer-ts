// ユニークなIDを管理する変数
let todoIdx: number = 0;

/**
 * TodoItemを表現するモデル
 */
export class TodoItemModel {
    // 現在のid
    id: number;
    // Todoの内容
    title: string;
    // boolean?
    completed: boolean;

    /**
     * @param obj 
     */
    constructor(obj: { title: string; completed: boolean }) {
        this.id = todoIdx++;
        this.title = obj.title;
        this.completed = obj.completed;
    }
}