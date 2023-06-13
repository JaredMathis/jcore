export function list_new_then_generic(then, lambda) {
    let list = [];
    then(list_new_then_add);
    function list_new_then_add(element) {
        lambda(list, element);
    }
    return list;
}