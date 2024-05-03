import mount from 'helloworld/HelloWorld';
import { useEffect, useRef } from 'react';

const HelloWorldRemote = () => {

    const helloWorldDiv = useRef<HTMLDivElement | null>(null);

    useEffect( () => {
      mount(helloWorldDiv.current)
  
    },[])

    
    return (
        <div ref={helloWorldDiv}></div>
    )

}

export default HelloWorldRemote;