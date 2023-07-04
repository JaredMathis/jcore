import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { reduce_generic } from './generic.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function reduce_max(then) {
    arguments_assert(arguments, [arguments_assert_todo]);
    function intialize(){
        return Number.NEGATIVE_INFINITY;
    }
    function each_inner(max, value){
        return max
    }
    let result = reduce_generic(intialize, each_inner, then);
    return result;
}