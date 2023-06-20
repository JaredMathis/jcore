import { function_dependencies_names_arguments_assert } from '../../../../../../function/dependencies/names/arguments/assert.mjs';
import { git } from '../../../../../../git.mjs';
import { metadata_arguments_assert_extra_allow } from '../../../../../../metadata/arguments/assert/extra/allow.mjs';
import { list_add_multiple } from '../../../../../../list/add/multiple.mjs';
import { comment } from '../../../../../../comment.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { function_name_get } from '../../../../../../function/name/get.mjs';
import { arguments_assert_predicate_default } from '../../../../../../arguments/assert/predicate/default.mjs';
import { git_no_commit } from '../../../../../../git/no/commit.mjs';
export async function refactor_functions_arguments_assert_missing_add_excludes() {
    arguments_assert(arguments, []);
    let excludes = await function_dependencies_names_arguments_assert();
    comment(`Eventually this should be refactored maybe to read files and detect an attribute`);
    const excludes_additional = [
        function_name_get(metadata_arguments_assert_extra_allow),
        function_name_get(arguments_assert_predicate_default()),
        function_name_get(git),
        function_name_get(git_no_commit)
    ];
    list_add_multiple(excludes, excludes_additional);
    return excludes;
}