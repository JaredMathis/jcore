import { log } from '../log.mjs';
import { speed_property_differences_get } from './property/differences/get.mjs';
export function speed_log(s) {
    let differences = speed_property_differences_get(s);
    log(differences);
    metadata([]);
}