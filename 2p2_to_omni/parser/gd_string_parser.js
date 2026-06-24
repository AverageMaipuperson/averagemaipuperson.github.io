export function get_objects(str)
{
    return str.split(";").shift();
}

export function get_object_data(obj)
{
    return obj.split(",");
}