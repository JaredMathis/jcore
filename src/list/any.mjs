import { boolean_value_false } from '../boolean/value/false.mjs';
import { boolean_value_true } from '../boolean/value/true.mjs';
import { metadata_generated } from '../metadata/generated.mjs';
import { metadata } from '../metadata.mjs';
import { function_is } from '../function/is.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function list_any(list, predicate) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    for (let a of list) {
        let v = predicate(a);
        if (v) {
            return boolean_value_true();
        }
    }
    return boolean_value_false();
    metadata([metadata_generated()]);
}