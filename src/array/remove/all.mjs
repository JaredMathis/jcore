export function array_remove_all(list, values) {
    for (let v of values) {
        array_remove(list, v);
    }
}