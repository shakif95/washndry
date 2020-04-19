import { BookingsFormValues, BookingsProps } from "../../components/dashboard/BookSlots/Bookings";
import { FormikBag } from "formik";

export const createBookingSuccessAction = (
  values: BookingsFormValues,
  { props }: FormikBag<BookingsProps, BookingsFormValues>
) => {
  props.createBooking(values);
  props.navigateToBookingSection();
}