export function swap_generic(generic_get, list, index_from, index_to, generic_set) {
    let from = generic_get(list, index_from);
    let to = generic_get(list, index_to);
    generic_set(list, index_to, from);
    generic_set(list, index_from, to);
}