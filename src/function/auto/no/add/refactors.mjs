import { js_mapper_args_to_statement_arguments_assert } from '../../../../js/mapper/args/to/statement/arguments/assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { refactor_functions_to_files } from '../../../../refactor/functions/to/files.mjs';
import { list_multiple_combine } from '../../../../list/multiple/combine.mjs';
export function function_auto_no_add_refactors() {
    arguments_assert(arguments, []);
    let first = [js_mapper_args_to_statement_arguments_assert];
    let second = [refactor_functions_to_files];
    let v = list_multiple_combine([
        first,
        second
    ]);
    return v;
    metadata([]);
}