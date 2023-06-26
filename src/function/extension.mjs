import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { file_extension_separator } from '../file/extension/separator.mjs';
import { string_combine } from '../string/combine.mjs';
export function function_extension() {
    arguments_assert(arguments, []);
    return string_combine(file_extension_separator(), 'mjs');
    metadata([]);
}