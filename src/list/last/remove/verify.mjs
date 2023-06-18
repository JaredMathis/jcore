import { list_is } from '../../is.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { equal } from '../../../equal.mjs';
import { assert } from '../../../assert.mjs';
import { list_last_remove } from '../remove.mjs';
export function list_last_remove_verify(list, last_expected) {
    arguments_assert(arguments, [
        list_is,
        defined_is
    ]);
    let last_actual = list_last_remove(list);
    let v = equal(last_expected, last_actual);
    assert(v);
    metadata([]);
}