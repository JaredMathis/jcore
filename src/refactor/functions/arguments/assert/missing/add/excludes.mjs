import { git } from '../../../../../../git.mjs';
import { tautology } from '../../../../../../tautology.mjs';
import { metadata_arguments_assert_extra_allow } from '../../../../../../metadata/arguments/assert/extra/allow.mjs';
import { list_add_multiple } from '../../../../../../list/add/multiple.mjs';
import { comment } from '../../../../../../comment.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { function_name_get } from '../../../../../../function/name/get.mjs';
import { function_dependencies_names } from '../../../../../../function/dependencies/names.mjs';
export async function refactor_functions_arguments_assert_missing_add_excludes() {
    arguments_assert(arguments, []);
    let excludes = await function_dependencies_names(function_name_get(arguments_assert));
    comment(`Eventually this should be refactored maybe to read files and detect an attribute`);
    list_add_multiple(excludes, [
        function_name_get(metadata_arguments_assert_extra_allow),
        function_name_get(tautology),
        function_name_get(git)
    ]);
    return excludes;
    refactor_functions_arguments_assert_missing_add_excludes;
}