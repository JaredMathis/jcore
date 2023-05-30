import { tests } from '../tests.mjs';
import { function_tests_all } from '../function/tests/all.mjs';
import { log } from '../log.mjs';
export async function tests_add(function_name) {
    let tests = await function_tests_all(function_name);
    log(tests);
}