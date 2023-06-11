export function database_reference_update_property(transaction, reference, property_name, property_value) {
    transaction.update(reference, { [property_name]: property_value });
}