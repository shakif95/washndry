import * as React from 'react';
import { Dashboard } from '../Dashboard';

import { Row, Col, Card, Modal, Container, Button, Form as ReactForm } from 'react-bootstrap';
import { Form, withFormik, FormikProps } from 'formik';
import { Calendar, momentLocalizer, Event, stringOrDate } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Bookings.css';
import '../common.css';
import { createBooking, Booking } from '../../../store/slices/bookingSlice';
import { push } from 'connected-react-router';
import { Routes } from '../../../consts';
import { connect, ResolveThunks } from 'react-redux';
import { createBookingSuccessAction } from '../../../store/actions/bookingActions';

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

export interface BookingsFormValues extends Booking {

}

export const BookingsComponent: React.FC<FormikProps<BookingsFormValues>> = ({
    values,
    setValues,
    isSubmitting,
    handleChange
}) => {

    const [events, setEvents] = React.useState(initialEvents);
    const [showBookingModal, setShowBookingModal] = React.useState(false);
    const [selectedEvent, setSelectedEvent] = React.useState<EventArgs>();

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

    const handleBookingModlHide = () => {
        setShowBookingModal(false);
    }

    const handleSelectedEvent = (event: Event) => {
        setSelectedEvent({
            event: event,
            start: (event.start) ? moment(event.start)
                .format("dddd, MMMM Do YYYY, h:mm:ss a")
                : moment()
                    .format("dddd, MMMM Do YYYY, h:mm:ss a"),
            end: (event.end) ? moment(event.end)
                .format("dddd, MMMM Do YYYY, h:mm:ss a")
                : moment()
                    .format("dddd, MMMM Do YYYY, h:mm:ss a"),
        });
        setValues({
            ...values,
            startDateTime: selectedEvent?.start as string,
            endDateTime: selectedEvent?.end as string
        });
        setShowBookingModal(true);
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
                                onSelectEvent={handleSelectedEvent}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal show={showBookingModal} onHide={handleBookingModlHide}>
                <Modal.Header closeButton>
                    <Container fluid>
                        <h3>New Booking</h3>
                    </Container>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid>
                        <Form noValidate>
                            <ReactForm.Group>
                                <ReactForm.Label>Start</ReactForm.Label>
                                <ReactForm.Control
                                    name="startDateTime"
                                    type="text"
                                    onChange={handleChange}
                                    // value={selectedEvent?.start as string}
                                    value={values.startDateTime as string}
                                    disabled
                                />
                            </ReactForm.Group>
                            <ReactForm.Group>
                                <ReactForm.Label>End</ReactForm.Label>
                                <ReactForm.Control
                                    name="endDateTime"
                                    type="text"
                                    onChange={handleChange}
                                    // value={selectedEvent?.end as string}
                                    value={values.endDateTime as string}
                                    disabled
                                />
                            </ReactForm.Group>
                            <ReactForm.Group>
                                <ReactForm.Label>Notes</ReactForm.Label>
                                <ReactForm.Control
                                    name="additionalNotes"
                                    type="textarea"
                                    value={values.additionalNotes}
                                    onChange={handleChange}
                                    placeholder="Any additional notes"
                                />
                            </ReactForm.Group>

                            <div>
                                <Button
                                    variant="primary"
                                    block
                                    type="submit"
                                >
                                    Submit
                                </Button>
                                <Button
                                    variant="secondary"
                                    block
                                    onClick={() => setShowBookingModal(false)}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </Modal.Body>
            </Modal>

        </Dashboard>
    )
}

const mapDispatchToProps = {
    createBooking: createBooking,
    navigateToBookingSection: () => push(Routes.BOOKSLOT)
}

const initialValues: BookingsFormValues = {
    startDateTime: '',
    endDateTime: '',
    additionalNotes: ''
}

const mapPropsToValues = () => (initialValues);

export type BookingsProps = ResolveThunks<typeof mapDispatchToProps>;

export const Bookings = connect(
    null,
    mapDispatchToProps
)(
    withFormik({
        mapPropsToValues,
        handleSubmit: createBookingSuccessAction
    })(BookingsComponent)
)