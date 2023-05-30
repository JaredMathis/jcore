import { error } from '../error.mjs';
import { exec } from 'child_process';
export function command_line(command) {
    return new Promise(function (resolve, reject) {
        exec(command, (error, stdout, stderr) => {
            let success = true;
            let result = {
                error,
                stdout,
                stderr
            };
            if (error) {
                success = false;
                reject(result);
                return;
            }
            resolve(result);
        });
    });
}