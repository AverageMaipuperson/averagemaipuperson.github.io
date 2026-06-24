export function get_objects(str)
{
    return str.split(";");
}

export function get_object_data(arr, key)
{
    return arr[key].split(",");
}