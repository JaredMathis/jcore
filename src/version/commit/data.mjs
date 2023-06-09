import { function_name_get } from '../../function/name/get.mjs';
export function version_commit_data(fn, args) {
    return {
        command: function_name_get(fn),
        args: args
    };
}