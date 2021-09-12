export class EventEmitter {

    // 登録するイベント名とSet(リスナー関数] 
    _listeners: Map<string, Set<any>>;

    constructor() {
        // Map object. 登録するイベント名とSet(リスナー関数] を管理する
        this._listeners = new Map();
    }

    /**
     * 指定したイベントが実行されたときに呼び出されるリスナー関数を登録する
     * @param {string} type イベント名
     * @param {EventListener} listener イベントリスナー
     */
    addEventListener(type: string, listener: EventListener) {
        // 指定したイベント名が無いなら、対応するSetを作成しリスナー関数を登録する
        if (!this._listeners.has(type)) {
            this._listeners.set(type, new Set())
        }

        const listenerSet = this._listeners.get(type)

        listenerSet?.add(listener)

    }

    /**
     * 指定したイベントをディスパッチする
     * @param {string} type イベント名
     * @returns 
     */
    emit(type: string): void {
        // 指定したイベントに対応するSetを取り出す。
        const listenerSet = this._listeners.get(type);

        if(!listenerSet) {
            return;
        }

        // すべてのリスナー関数を呼び出す
        listenerSet.forEach(listener => {
            listener.call(this);
        });
    }

    /**
     * 指定したイベントのイベントリスナーを解除する
     * @param {string} type 
     * @param {any} listener イベントリスナー
     * @returns 
     */
    removeEventListener(type: string, listener: EventListener) {
        // 指定したイベントに対応するSetを取り出し、該当するリスナー関数を削除する
        const listenerSet = this._listeners.get(type);
        if (!listenerSet) {
            return;
        }
        listenerSet.forEach(ownListener => {
            if (ownListener === listener) {
                listenerSet.delete(listener);
            }
        });
    }
}