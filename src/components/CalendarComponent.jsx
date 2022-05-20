import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

const CalendarComponent = () => {

    const events = [
        // event data...
        {
          title: 'my event',
          start: '2022-05-18',
          resourceEditable: false // resource not editable for this event
        }
      ]

      
	const handleDateClick = (e) => {
		// Fecha para asignar cita
		console.log(e.dateStr);
	};

	const handleEventClick = (e) => {
		// ID para buscar evento
		console.log(e.event.id);
	};

	const handleEventReceive = (eventInfo) => {
		const { start, end } = eventInfo.oldEvent._instance.range;
		const { start: newStart, end: newEnd } = eventInfo.event._instance.range;
		if (new Date(start).getDate() === new Date(newStart).getDate()) {
			eventInfo.revert();
		}
	}
    
    return ( 
        <FullCalendar
            locale={"es"}
            height={800}
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
            headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: 'dayGridMonth,timeGridWeek,listWeek',
                
            }}
            buttonText={{
                today:    'Hoy',
                month:    'Mes',
                week:     'Semana',
                list:     'Lista'
            }}
            events={events}
            initialView="dayGridMonth"
            // allDaySlot={false}
            slotMinTime="09:00:00"
            slotMaxTime="18:00:00"
            weekends={false}
            dateClick={(e) => handleDateClick(e)}
            eventClick={(e) => handleEventClick(e)}
            droppable={true}
            editable={true}
            eventDrop={(e) => handleEventReceive(e)}
        />        
     );
}
 
export default CalendarComponent;