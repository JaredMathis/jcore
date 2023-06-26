import { boolean_value_true } from '../../../../boolean/value/true.mjs';
import { equal } from '../../../../equal.mjs';
import { list_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_first_remove } from '../../../first/remove.mjs';
import { list_first } from '../../../first.mjs';
import { defined_is } from '../../../../defined/is.mjs';
export function list_remove_while_first_equals(args, value) {
    arguments_assert(arguments, [
        list_is,
        defined_is
    ]);
    let test = boolean_value_true();
    while (test) {
        list_first_remove(args);
        let v = list_first(args);
        test = equal(v, value);
    }
    metadata([]);
}