import { Emitter } from "./emitter";

export class Store extends Emitter {
    constructor(initialState) {
        super();
        this.initialState = initialState;
        this._state = Object.assign({}, this.initialState);
        this._prev = Object.assign({}, this.initialState);
    }
    getState() {
        return this._state;
    }
    getPrev() {
        return this._prev;
    }
    set(state) {
        this._state = Object.assign({}, state);
        this.emit(state);
    }
    reset() {
        this._state = Object.assign({}, this.initialState);
        this.emit(Object.assign({}, this.initialState));
    }
}