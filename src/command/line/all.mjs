import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { result_unsuccess } from '../../result/unsuccess.mjs';
import { log } from '../../log.mjs';
import { command_line_check } from './check.mjs';
import { result_empty } from '../../result/empty.mjs';
export async function command_line_all(commands) {
    arguments_assert(arguments, [tautology]);
    let result = result_empty();
    for (let c of commands) {
        let c_result = await command_line_check(c);
        if (!c_result.success) {
            log(`Command failed: ${ c }`);
            log(c_result.stdout);
            result_unsuccess(result);
            return result;
        }
    }
    return result;
    metadata([]);
}