/// <reference path="../array-selector.d.ts" />

class Query<T> implements IQuery<T> {

    constructor(private list: T[]) { }

    public where(expr: Function): IQueryResult<T> {
        const whereClause = new WhereClause(this.list);
        return whereClause.filter(expr);
    }

    public any(expr: Function): boolean {
        var found = false;
        this.list.some((item) => {
            if (expr(item) === true) {
                found = true;
            }
            return false;
        });
        return found;
    }

    public all(expr: Function): boolean {
        var all = true;
        this.list.some((item: T) => {
            if (expr(item) === false) {
                all = false;
            }
            return false;
        });
        return all;
    }

    public first(expr: Function): T {
        if (!this.list || this.list.length === 0) {
            return undefined;
        }
        let first: T;
        if (!expr) {
            return this.list[0];
        }
        this.list.some((item) => {
            if (expr(item) === true) {
                first = item;
            }
            return false;
        });
        return first;
    }

}