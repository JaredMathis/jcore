import { tautology } from '../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
export function js_code_call_expression_with_args(name, args) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return `${ name }(${ args })`;
    metadata([]);
}