import { object_property_get } from '../../object/property/get.mjs';
import { not } from '../../not.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { log } from '../../log.mjs';
import { command_line_try } from './try.mjs';
import { result_empty } from '../../result/empty.mjs';
import { list_is } from '../../list/is.mjs';
export async function command_line_all(commands) {
    arguments_assert(arguments, [list_is]);
    let result = result_empty();
    for (let c of commands) {
        let c_result = await command_line_try(c);
        let v_5 = 'success';
        let v_2 = object_property_get(c_result, v_5);
        let v = not(v_2);
        if (v) {
            let v_3 = `Command failed: ${ c }`;
            log(v_3);
            let v_6 = 'stdout';
            let v_4 = object_property_get(c_result, v_6);
            log(v_4);
            return c_result;
        }
    }
    return result;
    metadata([]);
}