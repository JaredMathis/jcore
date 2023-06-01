import { refactor_import_fix } from '../../../../refactor/import/fix.mjs';
import { refactor_arguments_assert_add } from '../../../../refactor/arguments/assert/add.mjs';
export function function_auto_after_refactors_first() {
    return [
        refactor_arguments_assert_add,
        refactor_import_fix
    ];
}