export interface Logger {
    debug: (...data: unknown[]) => void;
}

export class LocalStore {
    logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    setItem(key: string, item: any): void {
        this.logger.debug(['LOCAL STORE'], 'saveItem:', 'key:', key, 'item:', `"${item}"`);

        localStorage.setItem(key, JSON.stringify(item));
    }

    getItem(key: string): any {
        this.logger.debug(['LOCAL STORE'], 'getItem:', 'key:', key);

        return JSON.parse(localStorage.getItem(key) as string);
    }

    removeItem(key: string): void {
        this.logger.debug(['LOCAL STORE'], 'removeItem:', 'key:', key);

        localStorage.removeItem(key);
    }

    clear(): void {
        this.logger.debug(['LOCAL STORE'], 'clear storage');

        localStorage.clear();
    }
}
