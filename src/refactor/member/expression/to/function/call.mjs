import { function_name_get } from '../../../../../function/name/get.mjs';
import { js_parse_statement } from '../../../../../js/parse/statement.mjs';
import { log } from '../../../../../log.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_visit_nodes } from '../../../../../js/visit/nodes.mjs';
import { js_node_is_type_member_expression } from '../../../../../js/node/is/type/member/expression.mjs';
export function refactor_member_expression_to_function_call(args) {
    let {parsed} = args;
    js_visit_nodes(parsed, js_node_is_type_member_expression, v => {
        let node = object_property_get(v, 'node');
        let parent = object_property_get(v, 'parent');
        let property = object_property_get(node, 'property');
        let property_name = object_property_get(property, 'name');
        if (property_name === 'name') {
            console.log(parent);
            if (false)
                function_name_get(function_name_get);
            js_parse_statement();
        }
    });
}