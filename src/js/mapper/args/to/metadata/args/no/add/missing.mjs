import { boolean_value_false } from '../../../../../../../../boolean/value/false.mjs';
import { metadata } from '../../../../../../../../metadata.mjs';
import { js_mapper_args_to_metadata_args_generic } from '../../generic.mjs';
import { defined_is } from '../../../../../../../../defined/is.mjs';
import { arguments_assert } from '../../../../../../../../arguments/assert.mjs';
export async function js_mapper_args_to_metadata_args_no_add_missing(args) {
    arguments_assert(arguments, [defined_is]);
    let add_missing = boolean_value_false();
    let v = await js_mapper_args_to_metadata_args_generic(args, add_missing);
    return v;
    metadata([]);
}