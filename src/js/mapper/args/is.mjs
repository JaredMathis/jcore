import { boolean_value_true } from '../../../boolean/value/true.mjs';
import { metadata } from '../../../metadata.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { defined_is } from '../../../defined/is.mjs';
export function js_mapper_args_is(value) {
    arguments_assert(arguments, [defined_is]);
    return boolean_value_true();
    metadata([]);
}