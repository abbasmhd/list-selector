/// <reference path="../array-selector.d.ts" />
class Select<T> implements ISelect<T> {

    public from(list: T[]): IQuery<T> {

        return new Query(list);
    }

}