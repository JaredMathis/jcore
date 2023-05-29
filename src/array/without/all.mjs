import {array_contains} from '../contains.mjs'
import {array_filter} from '../filter.mjs'
export function array_without_all(list, values) {
    return array_filter(list, element => array_contains(values, element));
}