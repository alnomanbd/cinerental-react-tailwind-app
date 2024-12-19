import Star from "../assets/star.svg";

const Rating = ({ value }) => {
  const stars = Array(value).fill(Star);

  return (
    <>
      {stars.map((Star, index) => (
        <img key={index} src={Star} width="16" height="16" alt="" />
      ))}
    </>
  );
};

export default Rating;
