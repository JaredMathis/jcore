import { metadata } from '../../../../../../metadata.mjs';
import { function_names_metadata_arguments_assert_none } from '../../../../../../function/names/metadata/arguments/assert/none.mjs';
import { function_dependencies_names_arguments_assert } from '../../../../../../function/dependencies/names/arguments/assert.mjs';
import { list_add_multiple } from '../../../../../../list/add/multiple.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export async function refactor_functions_arguments_assert_missing_add_excludes() {
    arguments_assert(arguments, []);
    let excludes = await function_dependencies_names_arguments_assert();
    let excludes_additional = await function_names_metadata_arguments_assert_none();
    list_add_multiple(excludes, excludes_additional);
    return excludes;
    metadata([]);
}