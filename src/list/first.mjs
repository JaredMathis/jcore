import { list_index_at } from './index/at.mjs';
export function list_first(list) {
    return list_index_at(list, list_first_index());
}

function list_first_index() {
    return 0;
}
