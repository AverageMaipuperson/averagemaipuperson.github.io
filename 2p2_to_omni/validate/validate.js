import * as gmd_parser from "../parser/gd_string_parser.js";
export var errors = [];

export function version_to_threshold(ver)
{
    const map = {
        "1.0": 46, // yes... mirror portals existed in 1.0
        "1.1": 47, // ball portal also existed in 1.1
        "1.2": 47,
        "1.3": 82,
        "1.4": 105,
        "1.5": 141,
        "1.6": 199,
        "1.7": 285
    };

    return map[ver];
}

export function validate_object_ids(arr, ver)
{
    arr.forEach((obj, i) => {
        const data = gmd_parser.get_object_data(obj);
        if(parseInt(data[1]) > version_to_threshold(ver))
        {
            errors.push("Invalid Object ID found: " + data[1]);
            return false;
        }
    });
    return true;
}