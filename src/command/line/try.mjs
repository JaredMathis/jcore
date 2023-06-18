import { string_empty_not_is } from '../../string/empty/not/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { error } from '../../error.mjs';
import { exec } from 'child_process';
export async function command_line_try(command) {
    arguments_assert(arguments, [string_empty_not_is]);
    return await new Promise(function (resolve, reject) {
        exec(command, function v(error, stdout, stderr) {
            let success = true;
            if (error) {
                success = false;
            }
            let result = {
                command,
                success,
                error,
                stdout,
                stderr
            };
            resolve(result);
        });
    });
    metadata([]);
}