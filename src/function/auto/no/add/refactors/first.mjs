import { metadata } from '../../../../../metadata.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { refactor_import_fix } from '../../../../../refactor/import/fix.mjs';
import { js_mapper_args_to_statement_arguments_assert } from '../../../../../js/mapper/args/to/statement/arguments/assert.mjs';
export function function_auto_no_add_refactors_first() {
    arguments_assert(arguments, []);
    return [
        js_mapper_args_to_statement_arguments_assert,
        refactor_import_fix
    ];
    metadata([]);
}