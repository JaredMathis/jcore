import { js_node_property_elements } from '../../../node/property/elements.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_single } from '../../../../list/single.mjs';
import { js_statement_expression_arguments_get } from '../../expression/arguments/get.mjs';
import { js_statement_metadata_is } from '../is.mjs';
import { assert } from '../../../../assert.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
export function js_statement_metadata_args_get(statement) {
    assert(js_statement_metadata_is(statement));
    let last_args = js_statement_expression_arguments_get(statement);
    let array = list_single(last_args);
    let metadata_args = object_property_get(array, js_node_property_elements());
    return metadata_args;
    metadata([]);
}