import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_export_function_single_generic } from './single/generic.mjs';
export function js_export_function_single(parsed) {
    arguments_assert(arguments, [tautology]);
    const or_null = false;
    return js_export_function_single_generic(parsed, or_null);
    metadata([]);
}