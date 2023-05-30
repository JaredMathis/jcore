import { function_tests_all } from '../function/tests/all.mjs';
import { log } from '../log.mjs';
export async function tests_add(function_name) {
    let tests_all = await function_tests_all(function_name);
    log(tests_all);
}