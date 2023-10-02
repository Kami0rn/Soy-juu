interface Document {
    createElement(tagName: any): Element;
}

interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
}

interface Document {
    createElement(tagName: "img"): HTMLImageElement;
    createElement(tagName: "video"): HTMLVideoElement;
}