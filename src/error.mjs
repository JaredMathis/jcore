import { metadata } from './metadata.mjs';
import { function_name_get } from './function/name/get.mjs';
import { assert_arguments_count } from './assert/arguments/count.mjs';
import { comment } from './comment.mjs';
export function error(message) {
    comment(function_name_get(assert_arguments_count) + ' calls error, so do not check args length here');
    throw new Error(message);
    metadata([]);
}