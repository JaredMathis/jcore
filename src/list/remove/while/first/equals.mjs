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
    while (equal(list_first(args), value)) {
        list_first_remove(args);
    }
    metadata([]);
}