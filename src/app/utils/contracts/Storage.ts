export interface Storage {
    get(id: any): Promise<any>
    getBulk(): Promise<any[]>
    put(item: any): Promise<any>
    putBulk(items: any[]): Promise<any[]>
    remove(id: any): Promise<void>
    removeBulk(ids: any[]): Promise<void>
    getFiles(): string[]
    changeDirectory(directoryPath: string): void
}
