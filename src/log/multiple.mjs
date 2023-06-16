import { log } from '../log.mjs';
export function log_multiple(logs) {
    for (let message of logs) {
        log(message);
    }
}