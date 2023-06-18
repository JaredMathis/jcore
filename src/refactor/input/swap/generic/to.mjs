import { refactor_input_swap_generic } from '../generic.mjs';
import { subtract_1 } from '../../../../subtract/1.mjs';
import { js_function_declaration_to_params } from '../../../../js/function/declaration/to/params.mjs';
import { list_index_valid } from '../../../../list/index/valid.mjs';
import { assert } from '../../../../assert.mjs';
export async function refactor_input_swap_generic_to(args, predicate, indices_get) {
    let {index} = args;
    let {function_declaration} = args;
    let params = js_function_declaration_to_params(function_declaration);
    let v = list_index_valid(params, index);
    assert(v);
    let v_2 = predicate(index, params);
    assert(v_2);
    for (let i of indices_get(index, params)) {
        let index_previous = subtract_1(i);
        await refactor_input_swap_generic(args, index_previous, i);
    }
}