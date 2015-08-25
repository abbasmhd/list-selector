# list-selector
Typescript Linq style list selector 

based on [array-selector by thelgevold](https://github.com/thelgevold/array-selector)

```
    let $select = new Select();
    let res = $select.from([1, 2, 3]).where(a => a === 3 || a === 1).toArray()
	console.log(res); // return [1, 3]
```