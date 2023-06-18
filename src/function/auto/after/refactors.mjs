import { function_auto_after_refactors_first } from './refactors/first.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { refactor_functions_to_files } from '../../../refactor/functions/to/files.mjs';
import { list_multiple_combine } from '../../../list/multiple/combine.mjs';
export function function_auto_after_refactors() {
    arguments_assert(arguments, []);
    let first = function_auto_after_refactors_first();
    let second = [refactor_functions_to_files];
    let v = list_multiple_combine([
        first,
        second
    ]);
    return v;
    metadata([]);
}