import { list_add } from '../../../add.mjs';
import { object_copy_shallow } from '../../../../object/copy/shallow.mjs';
export function list_copy_shallow_add_multiple(refactor_stack, multiple) {
    let refactor_stack_child = object_copy_shallow(refactor_stack);
    for (let m of multiple) {
        list_add(refactor_stack_child, m);
    }
    return refactor_stack_child;
}