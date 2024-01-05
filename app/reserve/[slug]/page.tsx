import Form from "./components/Form";
import ReserveHeader from "./components/ReserveHeader";

interface ReservationProps {}

const Reservation: React.FC<ReservationProps> = () => {
  return (
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <ReserveHeader />
            <Form />
          </div>
        </div>
  );
};

export default Reservation;
