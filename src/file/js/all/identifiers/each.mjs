import { speed_property_differences_get } from '../../../../speed/property/differences/get.mjs';
import { speed_property_previous_get } from '../../../../speed/property/previous/get.mjs';
import { speed_start } from '../../../../speed/start.mjs';
import { log } from '../../../../log.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_identifiers } from '../../../../js/identifiers.mjs';
import { file_js_parse } from '../../parse.mjs';
import { file_js_all_path } from '../path.mjs';
import { speed_now } from '../../../../speed/now.mjs';
import { subtract } from '../../../../subtract.mjs';
export async function file_js_all_identifiers_each(lambda) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let all = await file_js_all_path();
    for (let file_path of all) {
        let s = speed_start();
        let parsed = await file_js_parse(file_path);
        let previous = speed_property_previous_get(s);
        let now = speed_now();
        let difference = subtract(now, previous);
        let differences = speed_property_differences_get(s);
        const t1 = performance.now() - previous;
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