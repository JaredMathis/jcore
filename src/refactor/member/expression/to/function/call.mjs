import { function_auto_after_refactors } from '../../../../../function/auto/after/refactors.mjs';
import { object_replace } from '../../../../../object/replace.mjs';
import { js_parse_expression } from '../../../../../js/parse/expression.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_visit_nodes } from '../../../../../js/visit/nodes.mjs';
import { js_node_is_type_member_expression } from '../../../../../js/node/is/type/member/expression.mjs';
import { list_add } from '../../../../../list/add.mjs';
import { refactor_multiple } from '../../../../multiple.mjs';
export async function refactor_member_expression_to_function_call(args) {
    let changed = false;
    let {parsed} = args;
    js_visit_nodes(parsed, js_node_is_type_member_expression, v => {
        let node = object_property_get(v, 'node');
        let property = object_property_get(node, 'property');
        let property_name = object_property_get(property, 'name');
        if (property_name === 'name') {
            let object = object_property_get(node, 'object');
            const code = `${ function_name_get(function_name_get) }()`;
            let expression = js_parse_expression(code);
            object_replace(node, expression);
            let args = object_property_get(node, 'arguments');
            list_add(args, object);
            changed = true;
        }
    });
    if (changed) {
        let refactors = function_auto_after_refactors();
        await refactor_multiple(args, refactors);
    }
}