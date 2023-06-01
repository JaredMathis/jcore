import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_suffix_async } from '../../suffix/async.mjs';
import { function_name_separator } from '../../name/separator.mjs';
export function function_naming_suffix_async() {
    arguments_assert(arguments, []);
    return `${ function_name_separator() }${ function_suffix_async() }`;
}