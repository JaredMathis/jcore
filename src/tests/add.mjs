import { string_length } from '../string/length.mjs';
import { string_skip } from '../string/skip.mjs';
import { function_tests_all } from '../function/tests/all.mjs';
import { list_map } from '../list/map.mjs';
import { log } from '../log.mjs';
import { string_function_tests_sub } from '../string/function/tests/sub.mjs';
import { assert } from '../assert.mjs';
import { string_starts_with } from '../string/starts/with.mjs';
export async function tests_add(function_name) {
    let tests_all = await function_tests_all(function_name);
    let tests_ids_all = list_map(tests_all, t => {
        let function_tests_prefix = `${ function_name }${ string_function_tests_sub() }`;
        assert(string_starts_with(t, function_tests_prefix));
        return string_skip(t, string_length(function_tests_prefix));
    });
    log(tests_ids_all);
}