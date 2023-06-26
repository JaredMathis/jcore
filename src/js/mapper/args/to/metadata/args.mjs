import { boolean_value_true } from '../../../../../boolean/value/true.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_mapper_args_to_metadata_args_generic } from './args/generic.mjs';
import { defined_is } from '../../../../../defined/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function js_mapper_args_to_metadata_args(args) {
    arguments_assert(arguments, [defined_is]);
    let add_missing = boolean_value_true();
    let v = await js_mapper_args_to_metadata_args_generic(args, add_missing);
    return v;
    metadata([]);
}