import { metadata } from '../../../metadata.mjs';
export function database_reference_update_property(transaction, reference, property_name, property_value) {
    let v = { [property_name]: property_value };
    transaction.update(reference, v);
    metadata([]);
}