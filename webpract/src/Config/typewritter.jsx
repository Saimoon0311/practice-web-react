import React from "react"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

function Type (){
          const handleType = (count: number) => {
                    // access word count number
                    console.log(count)}
                                              
                
                  const handleDone = () => {
                    console.log(`Done after 5 loops!`)
                  }
              
          return (
                    <div className='App'>
                      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        Feature Of Our {' '}
                        <span style={{ color: 'orange', fontWeight: 'bold' }}>
                          {/* Style will be inherited from the parent element */}
                          <Typewriter
                            words={['The Servicers', 'Assignment Services', 'Writting Services']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={55}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                          />
                        </span>
                      </h1>
                    </div>
                  )
          

                   
                 
} 


export default Type;
// export default Typetwo;