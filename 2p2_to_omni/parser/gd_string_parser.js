export function get_objects(str)
{
    let string = str.startsWith("kS38,") ? str.slice(5) : str;
    const objs = string.split("|");
    return objs.filter(obj => obj.includes("_") && obj.trim() !== "");
}

export function get_object_data(obj)
{
    return obj.split(",");
}