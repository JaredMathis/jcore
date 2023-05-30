import { function_name_get } from './function/name/get.mjs';
import { arguments_count } from './arguments/count.mjs';
import { comment } from './comment.mjs';
export function error(message) {
    comment(function_name_get(arguments_count) + ' calls error, so do not check args length here');
    throw new Error(message);
}