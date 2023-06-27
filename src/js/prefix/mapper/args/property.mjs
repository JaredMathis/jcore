import { js_prefix_mapper_args } from '../args.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_identifier_prefix_property } from '../../../identifier/prefix/property.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_prefix_mapper_args_property() {
    arguments_assert(arguments, []);
    let v = js_prefix_mapper_args();
    return js_identifier_prefix_property(v);
    metadata([]);
}