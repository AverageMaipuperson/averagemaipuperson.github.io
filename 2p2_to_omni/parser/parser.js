export function gmd_parse(str)
{
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, "text/xml");
    const dict = doc.querySelector("dict");
    const result = {};

    if (!dict) return result;
    const children = dict.children;
    for (let i = 0; i < children.length; i += 2)
        {
        const keyNode = children[i];
        const valNode = children[i + 1];

        if (keyNode && valNode && keyNode.tagName === 'k')
            {
            const key = keyNode.textContent;
            const val = valNode.tagName === 'i' ? Number(valNode.textContent) : valNode.textContent;
            
            result[key] = val;
        }
    }

    return result;
}

export function value_by_key(arr, key)
{
    return arr["k" + key];
}
