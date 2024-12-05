# Reactive Modules

Reactive Modules menyediakan state reaktif yang otomatis memberitahukan perubahan kepada fungsi-fungsi yang berlangganan.

## Penggunaan

```js
import Reactive from 'reactive-modules';

const state = new Reactive(10);

state.subscribe((val) => console.log(`Value updated to: ${val}`));
state.set(20); // Output: Value updated to: 20
```

## Lisensi

[MIT](LICENSE)
