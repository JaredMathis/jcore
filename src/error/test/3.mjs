import { error } from "../../error.mjs";
import { throws } from "../../throws.mjs";

throws(() => error('message', 'second argument'));
