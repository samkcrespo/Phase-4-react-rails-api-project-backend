
import * as React from "react";
// import Calendar from 'react-calendar';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Input from '@mui/material/Input';


function EditEvent({handleUpdateEvent, event} ){
        const [when, setWhen] = React.useState(event.when);
    
        // const [name, setName] = useState(name);
        // const [location, setLocation] = useState(location);
        // const [value, onChange] = React.useState(new Date());
    
    
    
        function handleFormSubmit(e) {
            e.preventDefault();
            
             fetch(`/events/${event.id}`, {
               method: "PATCH",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify({
                when,

               }),
             })
               .then((r) => r.json())
               .then((updatedEvents) => handleUpdateEvent(updatedEvents));
          }
    
    
    
    
        return (
        <form className="edit-when" onSubmit={handleFormSubmit}>
            {/* <input  type="text" onChange={(e) => setWhen(e.target.value)} value={when} name="when" placeholder="" /> */}
            {/* <Calendar onChange={onChange} value={value} /> */}
           
      
      <TextField
        id="date"
        label="Event Date"
        type="date"
        defaultValue={event.when}
        sx={{ width: 220, paddingRight: "10px" }}
        onChange={(e) => setWhen(e.target.value)} value={when}
        InputLabelProps={{
          shrink: true,
        }}
      /> 
      <Input type="submit" value="Save" />
          {/* <input type="submit" value="Save" /> */}
         
         </form>
        )
      }
    
export default EditEvent;