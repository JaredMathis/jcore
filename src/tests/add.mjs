import { string_prefix_without } from '../string/prefix/without.mjs';
import { function_tests_all } from '../function/tests/all.mjs';
import { list_map } from '../list/map.mjs';
import { log } from '../log.mjs';
import { string_function_tests_sub } from '../string/function/tests/sub.mjs';
export async function tests_add(function_name) {
    let tests_all = await function_tests_all(function_name);
    let tests_ids_all = list_map(tests_all, t => {
        let function_tests_prefix = `${ function_name }${ string_function_tests_sub() }`;
        return string_prefix_without(t, function_tests_prefix);
    });
    log(tests_ids_all);
}