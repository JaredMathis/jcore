import { log } from '../../../../log.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_identifiers } from '../../../../js/identifiers.mjs';
import { file_js_parse } from '../../parse.mjs';
import { file_js_all_path } from '../path.mjs';
import { log_multiple } from '../../../../log/multiple.mjs';
export async function file_js_all_identifiers_each(lambda) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let all = await file_js_all_path();
    for (let file_path of all) {
        const t0 = performance.now();
        let parsed = await file_js_parse(file_path);
        const t1 = performance.now();
        let identifiers = js_identifiers(parsed);
        const t2 = performance.now();
        lambda(identifiers, file_path);
        const t3 = performance.now();
        log({t0, t1, t2, t3})
    }
}