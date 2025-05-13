import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import notes from "../notes";

function App(){
    return <div>
        <Heading/>
        {notes.map(noteItem => <div>
            <Notes title={noteItem.title} content={noteItem.content} key={noteItem.key} />
        </div>)}
        <Footer/>
    </div>;
}
export default App;