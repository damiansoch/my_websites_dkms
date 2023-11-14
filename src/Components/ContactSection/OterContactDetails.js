import FacebookMsg from './FacebookMsg';

const OterContactDetails = ({ divHeight }) => {
  return (
    <div
      style={{ height: divHeight }}
      className='shadow contactSingleContainer p-3'
    >
      <FacebookMsg />
    </div>
  );
};

export default OterContactDetails;
