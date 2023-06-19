import { speed_next } from '../../../../speed/next.mjs';
import { speed_property_differences_get } from '../../../../speed/property/differences/get.mjs';
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
        let parsed = await file_js_parse(file_path);
        let s = speed_start();
        let identifiers = js_identifiers(parsed);
        speed_next(s);
        lambda(identifiers, file_path);
        speed_next(s);
        let differences = speed_property_differences_get(s);
        log(differences);
    }
}