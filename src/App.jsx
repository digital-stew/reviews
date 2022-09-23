import {FaChevronLeft,FaChevronRight, FaQuoteRight} from 'react-icons/fa'
import Review from './components/Review';
import './style.css'
function App() {
  return (
    <div className='wraper'>
      <div className="title">
        <h2>Our Reviews</h2>
        <div className="underline"></div>
      </div>
      <Review />
    </div>
  );
}

export default App;
