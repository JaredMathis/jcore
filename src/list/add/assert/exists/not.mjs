import { not } from '../../../../not.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { list_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_add } from '../../../add.mjs';
import { list_contains } from '../../../contains.mjs';
import { assert } from '../../../../assert.mjs';
export function list_add_assert_exists_not(stack, node) {
    arguments_assert(arguments, [
        list_is,
        defined_is
    ]);
    let v_2 = list_contains(stack, node);
    let v = not(v_2);
    assert(v);
    list_add(stack, node);
    metadata([]);
}