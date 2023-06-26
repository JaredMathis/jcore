import { boolean_value_true } from '../../../boolean/value/true.mjs';
import { boolean_value_false } from '../../../boolean/value/false.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_identifier_is_generic } from '../is/generic.mjs';
import { string_is } from '../../../string/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_identifier_part_is(value) {
    arguments_assert(arguments, [string_is]);
    let enforce_first = boolean_value_false();
    let enforce_last = boolean_value_true();
    const allow_underscores = boolean_value_false();
    let v = js_identifier_is_generic(value, enforce_first, enforce_last, allow_underscores);
    return v;
    metadata([]);
}