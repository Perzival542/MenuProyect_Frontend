import { RingLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div>
      <RingLoader color="#36D7B7" loading={true} size={150} />
    </div>
  );
};

export default Spinner;