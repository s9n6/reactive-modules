class Reactive {
    constructor(value) {
        this.value = value;
        this.subscribers = [];
    }

    set(value) {
        this.value = value;
        this.notify();
    }

    get() {
        return this.value;
    }

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    notify() {
        this.subscribers.forEach((fn) => fn(this.value));
    }
}

export default Reactive;
