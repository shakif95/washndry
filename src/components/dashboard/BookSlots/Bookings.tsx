import * as React from 'react';
import { Dashboard } from '../Dashboard';

import { Row, Col, Card } from 'react-bootstrap';
import { Calendar, momentLocalizer, Event, stringOrDate } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Bookings.css';
import '../common.css';

const localizer = momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar);

const initialEvents: Event[] = [
    {
        start: moment().toDate(),
        end: moment()
            .add(30, "minutes")
            .toDate(),
        title: "Booked",
        resource: {
            id: 1
        }
    }
]

interface EventArgs {
    event: Event;
    start: stringOrDate;
    end: stringOrDate;
    allDay?: boolean;
}

export const Bookings: React.FC<any> = props => {

    const [events, setEvents] = React.useState(initialEvents);

    const onEventResize = ({ event, start, end, allDay }: EventArgs) => {
        console.log("resize");
    };
    
    const onEventDrop = ({ event, start, end, allDay }: EventArgs) => {
        let afterremoveevents = events.filter(ev => ev.resource.id !== event.resource.id);
        console.log(afterremoveevents);
        setEvents([...afterremoveevents, event]);
        console.log(events);
    };

    const onSelectSlot = (slotInfo: any) => {
        const Ids: number[] = events.map(e => e.resource.id);
        const sortedIds = Ids.sort((x, y) => x - y);

        setEvents([...events, {
            start: slotInfo.start,
            end: slotInfo.end,
            title: "Booked",
            resource: {
                id: sortedIds[sortedIds.length - 1]
            }
        }])
    }

    return (
        <Dashboard>
            <Row>
                <Col md={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                Book Your Appointment
                    </Card.Title>
                            <Card.Subtitle className="card-subtitles">
                                Select you appointments from the free slots
                    </Card.Subtitle>
                        </Card.Header>
                        <Card.Body>
                            <DnDCalendar
                                defaultDate={moment().toDate()}
                                defaultView="week"
                                events={events}
                                localizer={localizer}
                                resizable
                                onEventResize={onEventResize}
                                onEventDrop={onEventDrop}
                                className="custom-calendar"
                                selectable
                                onSelectSlot={onSelectSlot}
                                views={['week', 'day']}
                                min={new Date(2017, 10, 0, 10, 0, 0)}
                                max={new Date(2017, 10, 0, 22, 0, 0)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Dashboard>
    )
}