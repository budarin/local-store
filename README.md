# local-store

Local storage service

## Installation

```bash
yarn add @budarin/local-store
```

## Usage

```ts
import { LocalStore } from '@budarin/local-store';

const store = new LocalStore(console);

store.setItem('key', 'value');
store.getItem('key');
store.removeItem('key');
store.clear();
```

## License

MIT
