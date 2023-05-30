import { log } from '../../log.mjs';
import { function_all_tests } from '../all/tests.mjs';
export async function function_tests_generate() {
    let tests = await function_all_tests();
    console.log(tests);
}