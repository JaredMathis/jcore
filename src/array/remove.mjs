export function array_remove(list, element) {
    let index = array_index_of(list, element);
    if (index >= 0) {
        array_remove_at(list, index);
    }
}