export function array_any(list, predicate) {
    for (let a of list) {
        if (predicate(a)) {
            return true;
        }
    }
    return false;
}