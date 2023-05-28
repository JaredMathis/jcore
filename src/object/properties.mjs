export function object_properties(object) {
    let result = [];
    for (let property in object) {
        let r = object_property_get(object, property);
        array_add(result, r);
    }
    return r;
}