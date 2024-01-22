const FlagsDisplayer = ({ data }) => {
  return (
    <div>
      <button onClick={() => console.log(data)}>flag</button>
      {/* {data.map((flag) => {
          
      })} */}
    </div>
  );
};

export default FlagsDisplayer;
