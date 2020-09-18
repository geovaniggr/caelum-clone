"use strict";
function addStyleToHtmlElement(element, props) {
    const values = Object.entries(props);
    values.forEach(([key, value]) => {
        element["style"][key] = value;
    });
    return element;
}
;
