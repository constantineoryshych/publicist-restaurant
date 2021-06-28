export class Emitter {
    constructor() {
        this._listeners = new Set();
    }
    emit(state) {
        this._listeners.forEach((listener) => {
            listener(state);
        });
    }
    get countListeners() {
        return this._listeners.size;
    }
    subscribe(listener) {
        this._listeners.add(listener);
        return this._unsubscribe.bind(this, listener);
    }
    _unsubscribe(listener) {
        this._listeners.delete(listener);
    }
}
