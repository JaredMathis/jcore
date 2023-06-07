import { string_starts_with } from '../../../../../string/starts/with.mjs';
import { function_name_all } from '../../../../name/all.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { string_identifier_sub_is } from '../../../../../string/identifier/sub/is.mjs';
import { list_filter } from '../../../../../list/filter.mjs';
export async function function_tests_generate_if_starts_with(prefix) {
    arguments_assert(arguments, [string_identifier_sub_is]);
    let names = await function_name_all();
    let starts_with = list_filter(names, n => string_starts_with(n, prefix));
}