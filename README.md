# local-store

Local storage service

## Installation

```bash
yarn add @budarin/local-store
```

## Usage

```ts
import { localStore } from '@budarin/local-store';

localStore.set('key', 'value');

localStore.get('key');

localStore.remove('key');

localStore.clear();
```

## License

MIT
