/// <reference path="../array-selector.d.ts" />
class QueryResult<T> implements IQueryResult<T> {

    constructor(private list: T[]) { }

    public toArray(): T[] {
        return this.list;
    }

    public take(n: number): T[] {
        return this.list.slice(0, n);
    }
}