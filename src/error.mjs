import { arguments_count } from "./arguments/count.mjs";
import { comment } from "./comment.mjs";

export function error(message) {
    comment(arguments_count.name + ' calls error, so do not check args length here')
    throw new Error(message);
}