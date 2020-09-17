function addStyleToHtmlElement( element: HTMLElement, props: object){

    const values = Object.entries(props);

    values.forEach( ([key, value]) => {
        element["style"][key] = value;
    });

    return element;

};