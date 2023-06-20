import { function_names_each } from '../../../../../../function/names/each.mjs';
import { log } from '../../../../../../log.mjs';
import { js_mapper_args_to_metadata_args } from '../../../../../../js/mapper/args/to/metadata/args.mjs';
import { refactor_functions_arguments_assert_missing_add_excludes_additional } from './excludes/additional.mjs';
import { function_dependencies_names_arguments_assert } from '../../../../../../function/dependencies/names/arguments/assert.mjs';
import { list_add_multiple } from '../../../../../../list/add/multiple.mjs';
import { comment } from '../../../../../../comment.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { list_empty_not } from '../../../../../../list/empty/not.mjs';
import { error } from '../../../../../../error.mjs';
import { noop } from '../../../../../../noop.mjs';
import { list_filter } from '../../../../../../list/filter.mjs';
import { js_node_is_call_expression } from '../../../../../../js/node/is/call/expression.mjs';
export async function refactor_functions_arguments_assert_missing_add_excludes() {
    arguments_assert(arguments, []);
    let excludes = await function_dependencies_names_arguments_assert();
    comment(`Eventually this should be refactored maybe to read files and detect an attribute`);
    await function_names_each(async args => {
        let metadata_args = await js_mapper_args_to_metadata_args(args);
        let filtered = list_filter(metadata_args, js_node_is_call_expression);
    });
    error();
    const excludes_additional = refactor_functions_arguments_assert_missing_add_excludes_additional();
    list_add_multiple(excludes, excludes_additional);
    return excludes;
}