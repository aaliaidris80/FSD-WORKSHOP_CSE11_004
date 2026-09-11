import EventEmitter from "node:events";
function createDomEvent() {
    const emitter = new EventEmitter();
    return {
        addEventListener: (event, listener) => emitter.on(event, listener),
        removeEventListener: (event, listener) => emitter.off(event, listener),
        dispatchEvent: (event, data) => emitter.emit(event, data)
    };
}