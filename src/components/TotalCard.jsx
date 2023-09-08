import PropTypes from "prop-types";

const TotalCard = ({ text, total }) => {
  return (
    <div className="bg-white w-1/3 rounded-md shadow-md p-2">
      <small className="text-black-1 font-semibold ">{text}</small>
      <h1 className="text-[40px] text-dark-blue font-semibold ">{total}</h1>
    </div>
  );
};

TotalCard.propTypes = {
  text: PropTypes.string,
  total: PropTypes.string,
};
export default TotalCard;
