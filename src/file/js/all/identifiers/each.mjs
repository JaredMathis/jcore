import { speed_property_previous_get } from '../../../../speed/property/previous/get.mjs';
import { speed_start } from '../../../../speed/start.mjs';
import { log } from '../../../../log.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_identifiers } from '../../../../js/identifiers.mjs';
import { file_js_parse } from '../../parse.mjs';
import { file_js_all_path } from '../path.mjs';
export async function file_js_all_identifiers_each(lambda) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let all = await file_js_all_path();
    for (let file_path of all) {
        let s = speed_start();
        let parsed = await file_js_parse(file_path);
        let previous = speed_property_previous_get(s);
        const t1 = performance.now() - t0;
        let identifiers = js_identifiers(parsed);
        const t2 = performance.now() - t1;
        lambda(identifiers, file_path);
        const t3 = performance.now() - t2;
        log({
            t1,
            t2,
            t3
        });
    }
}