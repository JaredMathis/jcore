import { boolean_value_false } from '../../boolean/value/false.mjs';
import { boolean_value_true } from '../../boolean/value/true.mjs';
import { string_empty_not_is } from '../../string/empty/not/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { error } from '../../error.mjs';
import { exec } from 'child_process';
export async function command_line_try(command) {
    arguments_assert(arguments, [string_empty_not_is]);
    return await new Promise(function (resolve, reject) {
        let v_2 = function v(error, stdout, stderr) {
            let success = boolean_value_true();
            if (error) {
                success = boolean_value_false();
            }
            let result = {
                command,
                success,
                error,
                stdout,
                stderr
            };
            resolve(result);
        };
        exec(command, v_2);
    });
    metadata([]);
}