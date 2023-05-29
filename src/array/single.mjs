export function array_single(list) {
    assert(array_length_is_1(list, 1));
    let result = array_first(list);
    return result;
}