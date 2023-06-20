import { function_names_each_filter } from '../../../../../../function/names/each/filter.mjs';
import { refactor_functions_arguments_assert_missing_add_excludes_additional } from './excludes/additional.mjs';
import { function_dependencies_names_arguments_assert } from '../../../../../../function/dependencies/names/arguments/assert.mjs';
import { list_add_multiple } from '../../../../../../list/add/multiple.mjs';
import { comment } from '../../../../../../comment.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export async function refactor_functions_arguments_assert_missing_add_excludes() {
    arguments_assert(arguments, []);
    let excludes = await function_dependencies_names_arguments_assert();
    comment(`Eventually this should be refactored maybe to read files and detect an attribute`);
    function_names_each_filter();
    const excludes_additional = refactor_functions_arguments_assert_missing_add_excludes_additional();
    list_add_multiple(excludes, excludes_additional);
    return excludes;
}