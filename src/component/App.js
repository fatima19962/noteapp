// import logo from './logo.svg';
// import 'App.css';
import React, { useState } from "react";
import Header from "./Header";
import Footer from './Footer';
import Note from './Note';
import '../App.css';
import notes from "../notes";
import CreateArea from "./CreateArea";
// console.log(notes);

// function createNotes(noteItem){
//        return <Note 
//          key={noteItem.key}
//          title={noteItem.title}
//          content={noteItem.content}

//        />
// }




function App() {


    const [notes, setNotes] = useState([]);

    function addNote(newnote) {
        // console.log(note);
        setNotes(prevNotes => {
            return [...prevNotes, newnote];
        });

    }
    function deleteNote(id) {
        //  console.log("delete is accoure")
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>

            <Header />

            <CreateArea onAdd={addNote} />

            {/* <Note title="first app"  content="this is content app" /> */}
            {/* {notes.map(createNotes)} */}
            {notes.map((noteItem,index) => {
        return(
            <Note
                id={index}
                key={index}
                // key={noteItem.key}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}

            />
            );
        })}

            <Footer />

        </div>
    );

}

export default App;
