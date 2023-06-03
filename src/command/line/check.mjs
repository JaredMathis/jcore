import { string_empty_not_js } from '../../string/empty/not/js.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { error } from '../../error.mjs';
import { exec } from 'child_process';
if (false)
    string_empty_not_js;
export async function command_line_check(command) {
    arguments_assert(arguments, [tautology]);
    return await new Promise(function (resolve, reject) {
        exec(command, (error, stdout, stderr) => {
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