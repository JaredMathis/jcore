export function array_all_combine(concats) {
    let concat = [];
    for (let list of concats) {
        array_add_all(concat, list);
    }
    return concat;
}