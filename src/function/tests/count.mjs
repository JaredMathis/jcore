import { list_length } from '../../list/length.mjs';
import { function_tests_all } from './all.mjs';
export async function function_tests_count(function_name) {
    let tests = await function_tests_all(function_name);
    return list_length(tests);
}