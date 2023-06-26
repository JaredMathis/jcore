import { metadata_rule_operator_to_function_call_none } from '../metadata/rule/operator/to/function/call/none.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { string_is } from './is.mjs';
export function string_combine(result, s) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    return result + s;
    metadata([metadata_rule_operator_to_function_call_none()]);
}