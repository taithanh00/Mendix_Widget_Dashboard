import { createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

export function preview() {
    return <HelloWorldSample />;
}

export function getPreviewCss() {
    return require("./ui/Grid.css");
}
