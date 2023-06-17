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
        if (!(c_result.success)) {
            log(`Command failed: ${ c }`);
            log(c_result.stdout);
            return c_result;
        }
    }
    return result;
    metadata([]);
}