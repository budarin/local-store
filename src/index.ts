class CacheStore {
    constructor() {}

    setItem(key: string, item: any): void {
        localStorage.setItem(key, JSON.stringify(item));
    }

    getItem(key: string): any {
        return JSON.parse(localStorage.getItem(key) as string);
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    clear(): void {
        localStorage.clear();
    }
}

export const localStore = new CacheStore();
