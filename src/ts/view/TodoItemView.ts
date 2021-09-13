// import { element } from "./html-util";

// interface onUpdate{(id: number, completed: boolean): void};
// interface onDelete{(id: number): void};

// export class TodoItemView {
//     createElement(todoItem, obj: { onUpdateTodo: onUpdate, onDeleteTodo: onDelete}): Element {
//             // 完了済ならchecked属性を付け、未完了ならchecked属性を外す
//             const todoItemElement = todoItem.completed
//                 ? element`<li><input type="checkbox" class="checkbox" checked>
//                     <s>${todoItem.title}</s>
//                     <button class="delete">x</button>
//                 </li>`
//                 : element`<li><input type="checkbox" class="checkbox">
//                     ${todoItem.title}
//                     <button class="delete">x</button>
//                 </li>`;

//             // チェックボックスがトグルしたときのイベントにリスナー関数を登録
//             const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
//             inputCheckboxElement?.addEventListener("change", () => {
//                 // 指定したTodoアイテムの完了状態を反転させる
//                 onUpdateTodo({
//                     id: todoItem.id,
//                     completed: !todoItem.completed
//                 });
//             });

//             // 削除ボタン(x)がクリックされたときにtodoListModelからアイテムを削除する
//             const deleteButtonElement = todoItemElement.querySelector(".delete");
//             deleteButtonElement?.addEventListener("click", () => {
//                 onDeleteTodo({
//                     id: todoItem.id
//                 });
//             });

//             // 作成したTodoアイテムのHTML要素を返す
//             return todoItemElement;
//     }
// }