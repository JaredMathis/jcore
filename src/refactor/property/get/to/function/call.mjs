import { noop } from '../../../../../noop.mjs';
import { tautology } from '../../../../../tautology.mjs';
import { js_visit } from '../../../../../js/visit.mjs';
export function refactor_property_get_to_function_call() {
    let {parsed} = args;
    js_visit(parsed, tautology, noop);
}