import Reactive from './lib/index.js';

const state = new Reactive(10);

state.subscribe((val) => console.log(`Value updated to: ${val}`));
state.set(20); // Output: Value updated to: 20
