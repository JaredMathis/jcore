import { error } from '../error.mjs';
import { exec } from 'child_process';
import { assert } from 'console';
export async function command_line(command) {
    let result = await new Promise(function (resolve, reject) {
        exec(command, (error, stdout, stderr) => {
            let success = true;
            if (error) {
                success = false;
                console.log({command, error, stdout})
            }
            let result = {
                success,
                error,
                stdout,
                stderr
            };
            resolve(result);
        });
    });
    assert(result.success);
    return result;
}