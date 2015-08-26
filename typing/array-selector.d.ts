interface IQueryResult<T> {
    toArray(): T[];
    take(n: number): T[];
}

interface IWhereClause<T> {
    filter(expr: Function): IQueryResult<T>;
}

interface IQuery<T> {
    where(expr: Function): IQueryResult<T>;
    any(expr: Function): boolean;
    all(expr: Function): boolean;
    first(expr: Function): T;
}

interface ISelect<T> {
    from(list: T[]): IQuery<T>;
}