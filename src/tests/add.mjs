import { function_tests_all } from '../function/tests/all.mjs';
import { list_map } from '../list/map.mjs';
import { log } from '../log.mjs';
export async function tests_add(function_name) {
    let tests_all = await function_tests_all(function_name);
    let tests_ids_all = list_map(tests_all, t => {
        
    });
    log(tests_all);
}