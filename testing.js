const map = new Map()

map.set('key1', 'value 1')
map.set("key2", "value 2");
const mapIterator = map[Symbol.iterator]();
console.log(mapIterator.next().value)
console.log(mapIterator.next().value);