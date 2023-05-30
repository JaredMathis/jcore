import { error } from '../../error.mjs';
import { exec } from 'child_process';
export async function command_line_check(command) {
    return await new Promise(function (resolve, reject) {
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
}