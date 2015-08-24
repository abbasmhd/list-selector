/// <reference path="../array-selector.d.ts" />
class WhereClause<T> implements IWhereClause<T> {

    constructor(public list: T[]) { }

    public filter(expr: Function): IQueryResult<T> {
        var res: T[] = [];
        if (this.list) {
            this.list.map((item) => {
                if (expr(item) === true) {
                    res.push(item);
                }
            });
        }
        return new QueryResult(res);
    }

}