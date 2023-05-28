export function object_property_invoke(default_value, object, property_name) {
    let result = default_value;
    if (object_property_exists(object, property_name)) {
        result = object_property_get(object, property_name)();
    }
    return result;
}
