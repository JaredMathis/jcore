import { assert } from "../../assert.mjs";

export function array_remove_at(list, index) {
    assert(array_index_valid(list, index));
    list.splice(index, 1);
}