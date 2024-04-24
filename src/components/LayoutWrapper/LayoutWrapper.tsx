import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './LayoutWrapper.scss';

function LayoutWrapper(props: any) {
  return (
    <div className='layout'>
      <Header />
      <div className='mainContent'>{props.children}</div>
      {!props.noFooter && <Footer />}
    </div>
  );
}

export default LayoutWrapper;
