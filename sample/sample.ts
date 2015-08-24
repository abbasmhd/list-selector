/// <reference path="../array-selector.d.ts" />
class Sample {

    public getResults() {
        const $select = new Select();
        const res = $select.from([1, 2, 3]).where(a => a === 3 || a === 1).toArray();
        console.log(res);
    }
}

var s = new Sample();
s.getResults();