import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
  const appId = process.env.REACT_APP_F_APP_ID;
  const pageId = process.env.REACT_APP_F_PAGE_ID;
  console.log(appId);
  console.log(pageId);
  return (
    <FacebookProvider appId={appId} chatSupport>
      <CustomChat pageId={pageId} minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
