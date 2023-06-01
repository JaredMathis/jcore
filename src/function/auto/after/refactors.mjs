import { refactor_arguments_assert_add } from '../../../refactor/arguments/assert/add.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { refactor_functions_to_files } from '../../../refactor/functions/to/files.mjs';
import { refactor_import_fix } from '../../../refactor/import/fix.mjs';
export function function_auto_after_refactors() {
    arguments_assert(arguments, []);
    return [
        refactor_arguments_assert_add,
        refactor_import_fix,
        refactor_functions_to_files
    ];
    metadata([]);
}