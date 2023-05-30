import { result_success } from './success.mjs';
export function result_empty() {
    return { [result_success()]: true };
}