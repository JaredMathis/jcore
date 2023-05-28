import {exec} from 'child_process';
export function command_line(command) {
    return new Promise(function(resolve, reject) {
        exec(command, (error, stdout, stderr) => {
            let result = {error, stdout, stderr}
            if (error) {
                reject(result);
                return;
            }

            resolve(result);
        });
    });
}