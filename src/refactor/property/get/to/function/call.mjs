import { noop } from '../../../../../noop.mjs';
import { tautology } from '../../../../../tautology.mjs';
import { js_visit } from '../../../../../js/visit.mjs';
import { log } from '../../../../../log.mjs';
export function refactor_property_get_to_function_call(args) {
    let {parsed} = args;
    js_visit(parsed, tautology, n => log(n));
}