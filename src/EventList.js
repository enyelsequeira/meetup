import React from 'react';
import Event from "./Event"


const EventList = ({ events: { events }}) =>{
  return(
    <ul className='EventList'>
      {events.map(event =>
        <li key={event.id}>
          <Event event={event} />
        </li>
        )}
    </ul>
  );
}

export default EventList


// class EventList extends Component{
    
    
//     render(){
//         return(
//             <ul className="EventList">
//             {this.props.events.map(event =>
//               <li key={event.id}>
//                 <Event event={event} />
//               </li>
//             )}
//           </ul>         
//         );
//     }
// }

// export default EventList