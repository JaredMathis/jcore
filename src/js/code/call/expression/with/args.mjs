import { tautology } from '../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_is } from '../../../../../string/is.mjs';
export function js_code_call_expression_with_args(name, args) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    return `${ name }(${ args })`;
    metadata([]);
}