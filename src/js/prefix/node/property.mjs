import { js_identifier_prefix_property } from '../../identifier/prefix/property.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_prefix_node } from '../node.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_prefix_node_property() {
    arguments_assert(arguments, []);
    let v = js_prefix_node();
    return `${ v }_property`;
    js_identifier_prefix_property;
    metadata([]);
}