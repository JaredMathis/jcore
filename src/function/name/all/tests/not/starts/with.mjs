import { function_name_all_tests_not } from '../../not.mjs';
import { string_is } from '../../../../../../string/is.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { list_filter } from '../../../../../../list/filter.mjs';
import { string_starts_with } from '../../../../../../string/starts/with.mjs';
export async function function_name_all_tests_not_starts_with(prefix) {
    arguments_assert(arguments, [string_is]);
    let result = await function_name_all_tests_not();
    return list_filter(result, r => string_starts_with(r, prefix));
}