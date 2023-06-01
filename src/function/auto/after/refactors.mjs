import { refactor_arguments_assert_add } from '../../../refactor/arguments/assert/add.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { refactor_functions_to_files } from '../../../refactor/functions/to/files.mjs';
import { refactor_import_fix } from '../../../refactor/import/fix.mjs';
import { list_all_combine } from '../../../list/all/combine.mjs';
export function function_auto_after_refactors() {
    arguments_assert(arguments, []);
    let first = [
        refactor_arguments_assert_add,
        refactor_import_fix
    ];
    let second = [refactor_functions_to_files];
    return list_all_combine([
        first,
        second
    ]);
    metadata([]);
}