import { assert } from '../../../../../assert.mjs';
import { object_each } from '../../../../../object/each.mjs';
export function file_js_all_identifier_all_rename(dictionary) {
    let keys = object_keys(dictionary);
    let values = object_values(dictionary);

    let concat = [];
    for (let list of [keys, values]) {
        array_add_all(concat, list);
    }

    assert(array_unique_is(concat))

    object_each(dictionary, (to, from) => {

    });
}