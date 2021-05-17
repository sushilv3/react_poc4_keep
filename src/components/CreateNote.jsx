import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props)=>{

    const [expand, setExpand] = useState(false);

    const [note,setNote] = useState({

        title:'',
        content: '',
    });

    const InputEvent = (event)=>{

        // const value=event.target.value;
        // const name=event.target.name;

        const{name, value} = event.target;

        setNote((prevData)=>{
            return {
                ...prevData,
                [name]:value

            }
        });
        console.log(note)
    };


const addEvent =()=>{
    props.passNote(note);
    setNote({
        title:'',
        content: '',
    });
    

};
const expandIt = ()=>{
    setExpand(true);
};

const backToNormal = ()=>{
    setExpand(false);
}
    return(
        <>
            <div className="main_note" onDoubleClick={backToNormal}>
                <form>
                   { expand?
                    <input 
                    type ="text" 
                    placeholder="Title" 
                    name="title" 
                    value={note.title} 
                    onChange={InputEvent} 
                    /> : null }
                   
                    <textarea 
                    rows='' 
                    column='' 
                    placeholder="Write note ..." 
                    name="content" 
                    onClick={expandIt} 
                    
                    value={note.content} 
                    onChange={InputEvent}>
                    </textarea>

                    {expand?
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign"/>
                    </Button> : null}
                </form>
            
            </div>
        </>
    );

}

export default CreateNote;