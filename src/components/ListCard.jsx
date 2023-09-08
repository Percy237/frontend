import PropTypes from "prop-types";

const ListCard = ({ id, name, number, status, type }) => {
  return (
    <div className="flex text-left items-center py-3 border-b border-b-gray">
      <div className="w-1/3">{id}</div>
      <div className="w-1/3">{name}</div>
      <div className="w-1/3">{number}</div>
      <div className="w-1/3">{type}</div>
      <div className="w-1/3">
        <p className="h-7 w-28 bg-white grid place-content-center rounded-md border-2 text-light-green border-light-green ">
          {status}
        </p>
      </div>
    </div>
  );
};

ListCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  type: PropTypes.string,
  status: PropTypes.string,
};

export default ListCard;
