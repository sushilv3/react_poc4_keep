import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import './App.css';

function App() {
    const[addItem, setAddItem] = useState([]);

    const addNote = (note)=>{
        // alert('i m clickc');
     
        setAddItem((prevData)=>{
            return[...prevData, note];
        });
        console.log(note);

    };

    const onDelete = (id) =>{
        setAddItem((oldData)=>oldData.filter((currValaue, index)=>{
            return index !==id;
        }));

    };
    return ( 
        <>
            <h1>  </h1>
            <Header />
            <CreateNote passNote={addNote} />
            {addItem.map((currValue,index)=>{return (<Note key={index} id={index} title={currValue.title} content={currValue.content} deleteItem={onDelete}/>);})}
          
            <Footer />
        </>
    );
}

export default App;