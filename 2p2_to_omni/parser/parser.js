export function xml_parse(str)
{
    const parser = new DOMParser();
    return parser.parseFromString(str, "text/xml");
}