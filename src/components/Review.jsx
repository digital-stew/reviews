import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";
function Review() {
  const [index, setIndex] = useState(3);
  function next() {
    if(index === people.length-1){
        setIndex(0)
        return
    }
   setIndex(index+1)
  }
  function prev(){
    if(index === 0) {
        setIndex(people.length-1)
        return
    }
    setIndex(index-1)
  }
  function supriseMe(){
   const newIndex = Math.floor(Math.random() * people.length);
   setIndex(newIndex)
  }
  const { name, job, image, text } = people[index];
  return (
    <section className="review-wraper">
      <img src={image} alt={name} />
      <div className="quote-image-wraper">
        <FaQuoteRight />
      </div>
      <p className="name">{name}</p>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="chevron-wraper">
        <div onClick={prev}>
          <FaChevronLeft />
        </div>
        <div onClick={next}>
          <FaChevronRight />
        </div>
      </div>
      <button onClick={supriseMe}>Suprise Me</button>
    </section>
  );
}

export default Review;
