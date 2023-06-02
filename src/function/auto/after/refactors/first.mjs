import { refactor_import_fix } from '../../../../refactor/import/fix.mjs';
import { js_mapper_args_to_statement_arguments_assert } from '../../../../js/mapper/args/to/statement/arguments/assert.mjs';
export function function_auto_after_refactors_first() {
    return [
        js_mapper_args_to_statement_arguments_assert,
        refactor_import_fix
    ];
}