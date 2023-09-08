import { FaChartBar } from "react-icons/fa";
import PropTypes from "prop-types";

const DemographicCard = ({ type, pieChart }) => {
  return (
    <div className="bg-white w-80 h-60  rounded-md shadow-md p-2 relative">
      <div className="flex gap-2 items-center">
        <div className="bg-dark-blue w-7 h-7 rounded-full grid place-content-center">
          <FaChartBar className="text-green font-bold" />
        </div>
        <h1 className="capitalize">{type} Demographic</h1>
      </div>
      {pieChart}
      <div className="absolute top-1/2 right-10">
        <div className="flex gap-1 items-center">
          <p className="w-3 h-3 bg-green"></p>Girls
        </div>
        <div className="flex gap-1 items-center">
          <p className="w-3 h-3 bg-green"></p>Boys
        </div>
      </div>
    </div>
  );
};

DemographicCard.propTypes = {
  type: PropTypes.string,
  pieChart: PropTypes.any,
};

export default DemographicCard;
