# local-store

Local storage service

## Installation

```bash
yarn add @budarin/local-store
```

## Usage

```ts
import { LocalStore } from '@budarin/local-store';

const store = new LocalStore();

store.set('key', 'value');

store.get('key');

store.remove('key');

store.clear();
```

## License

MIT
