/** 
import Header from "../../Components/Header";
import React, {useState, useEffect} from "react";
import ReactMarkdown from "react-markdown";
import ReactDOM from "react-dom";

import Percieve from "../Content/Percievable_C.md";

const Percievable = () => {
    const [redirect, setRedirect] = useState(false);
}


export const PageContent = () : JSX.Element => {
    const [PercievableText, setPerceiveableText] = useState('')

    useEffect(() => {
        fetch(Percieve).then(res => res.text()).then(text => setPerceiveableText(text))
    })

    return (
        <div>
            <ReactMarkdown children={PercievableText} />
        </div>

    )

}

export default Percievable;
*/