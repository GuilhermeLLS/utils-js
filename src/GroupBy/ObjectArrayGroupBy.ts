import { objectArray } from "./ObjectArray";

function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        let collection = map.get(key);
        if (!collection) {
            map.set(key, 1);
        } else {
            map.set(key, collection + 1)
        }
    });
    return map;
}

const grouped = groupBy(objectArray, i => i.value);

console.log(grouped);