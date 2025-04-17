export interface Logger {
    debug: (...data: unknown[]) => void;
    error: (...data: unknown[]) => void;
}

const fakeLogger: Logger = {
    debug: () => {},
    error: () => {},
};

export class LocalStore {
    logger: Logger;

    constructor(logger: Logger = fakeLogger) {
        this.logger = logger;
    }

    setItem(key: string, item: any): void {
        this.logger.debug('saveItem:', 'key:', key, 'item:', `"${item}"`);

        localStorage.setItem(key, encodeURIComponent(JSON.stringify(item)));
    }

    getItem(key: string): any {
        this.logger.debug('getItem:', 'key:', key);

        try {
            return JSON.parse(decodeURIComponent(localStorage.getItem(key) as string));
        } catch (error) {
            this.logger.error('getItem:', error);
            return;
        }
    }

    removeItem(key: string): void {
        this.logger.debug('removeItem:', 'key:', key);

        localStorage.removeItem(key);
    }

    clear(): void {
        this.logger.debug('clear storage');

        localStorage.clear();
    }
}
