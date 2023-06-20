import { refactor_functions_arguments_assert_missing_add_excludes_additional } from '../../../../refactor/functions/arguments/assert/missing/add/excludes/additional.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function metadata_arguments_assert_none_initialize() {
    arguments_assert(arguments, []);
    const excludes_additional = refactor_functions_arguments_assert_missing_add_excludes_additional();
}