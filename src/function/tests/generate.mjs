import { list_join } from '../../list/join.mjs';
import { list_map } from '../../list/map.mjs';
import { log } from '../../log.mjs';
import { function_all_tests } from '../all/tests.mjs';
export async function function_tests_generate() {
    let file_path = './src/tests.mjs'
    let test_names = await function_all_tests();

    let mapped = list_map(test_names, n => `await ${n}();`)
    let code = list_join(mapped, string_new_line())
    await file_overwrite(file_path, code);
    
    console.log(test_names);
}