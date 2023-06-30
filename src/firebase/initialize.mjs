import { boolean_value_true } from '../boolean/value/true.mjs';
import { not } from '../not.mjs';
export function firebase_initialize() {
    let v = not(initialized);
    if (v) {
        let v_3 = 'truthcode';
        let v_2 = { projectId: v_3 };
        initializeApp(v_2);
        initialized = boolean_value_true();
    }
}