import { log } from '../../log.mjs';
import { function_all_tests } from '../all/tests.mjs';
export async function function_tests_generate() {
    let test_names = await function_all_tests();
    console.log(test_names);
}