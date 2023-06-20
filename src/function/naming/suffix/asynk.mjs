import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_suffix_asynk } from '../../suffix/asynk.mjs';
import { function_name_separator } from '../../name/separator.mjs';
export function function_naming_suffix_asynk() {
    arguments_assert(arguments, []);
    return `${ function_name_separator() }${ function_suffix_asynk() }`;
}