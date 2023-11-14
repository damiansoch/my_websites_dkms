const OterContactDetails = ({ divHeight }) => {
  return (
    <div
      style={{ height: divHeight }}
      className='shadow contactSingleContainer justify-content-evenly'
    >
      <div>
        <h4 className='title '>Other Contact:</h4>
      </div>
      <div>
        <p>
          <a href='mailto:	dkms.dev.personal@gmail.com?subject=Website%20Enquiry'>
            Email: dkms.dev.personal@gmail.com
          </a>
        </p>
        <p>
          <a href='tel:0868406691'>Phone: 0868406691</a>
        </p>
      </div>
    </div>
  );
};

export default OterContactDetails;
