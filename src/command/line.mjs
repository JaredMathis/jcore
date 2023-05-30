import { error } from '../error.mjs';
import { exec } from 'child_process';
import { assert } from 'console';
export function command_line(command) {
    let result = new Promise(function (resolve, reject) {
        exec(command, (error, stdout, stderr) => {
            let success = true;
            if (error) {
                success = false;
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