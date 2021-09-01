import React from "react"
import CountUp from 'react-countup'
function Counter(){
          return(
<CountUp start={0} end={100} delay={0} duration={2.75}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
          );
}

export default Counter