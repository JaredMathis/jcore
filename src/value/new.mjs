import { metadata } from '../metadata.mjs';
export function value_new(default_value) {
    return {
        value: default_value,
        set: false
    };
    metadata([]);
}