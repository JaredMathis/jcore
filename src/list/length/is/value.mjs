import { equal } from '../../../equal.mjs';
import { list_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_length } from '../../length.mjs';
import { defined_is } from '../../../defined/is.mjs';
export function list_length_is_value(list, value) {
    arguments_assert(arguments, [
        list_is,
        defined_is
    ]);
    return equal(list_length(list), value);
    metadata([]);
}