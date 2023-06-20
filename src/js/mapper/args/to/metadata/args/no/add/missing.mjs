import { js_mapper_args_to_metadata_args_generic } from '../../generic.mjs';
import { defined_is } from '../../../../../../../../defined/is.mjs';
import { arguments_assert } from '../../../../../../../../arguments/assert.mjs';
export async function js_mapper_args_to_metadata_args_no_add_missing(args) {
    arguments_assert(arguments, [defined_is]);
    let add_missing = true;
    return await js_mapper_args_to_metadata_args_generic(args, add_missing);
}