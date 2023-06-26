import { boolean_value_true } from '../../boolean/value/true.mjs';
import { string_is } from '../../string/is.mjs';
import { js_identifier_is_generic } from './is/generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function js_identifier_is(value) {
    arguments_assert(arguments, [string_is]);
    let enforce_first_and_last = boolean_value_true();
    const allow_underscores = boolean_value_true();
    let v = js_identifier_is_generic(value, enforce_first_and_last, enforce_first_and_last, allow_underscores);
    return v;
    metadata([]);
}