import { object_keys } from '../../../../../object/keys.mjs';
import { assert } from '../../../../../assert.mjs';
import { object_each } from '../../../../../object/each.mjs';
export function file_js_all_identifier_all_rename(dictionary) {
    let keys = object_keys(dictionary);
    let values = object_values(dictionary);
    const concats = [
        keys,
        values
    ];
    let concat = array_all_combine(concats);
    assert(array_unique_is(concat));
    object_each(dictionary, (to, from) => {
    });
}


