import { React, createElement, useEffect, useState } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
export function Grid({ sampleText, username, usertitle, user }) {
    const [checkValue, setCheckValue] = useState("");
    const [checkTitle, setTitleValue] = useState("");
    useEffect(() => {
        if (user?.items && username) {
            const check = username.get(user?.items[0]).value;
            setCheckValue(check);
            console.log(check);
        }
        if (user?.items && usertitle) {
            const check2 = usertitle.get(user?.items[0]).value;
            setTitleValue(check2);
            console.log(check2);
        }
    }, [sampleText, user]);
    return (
        <div>
            <HelloWorldSample sampleText={sampleText} check={checkValue} check2={checkTitle} />
        </div>
    );
}
