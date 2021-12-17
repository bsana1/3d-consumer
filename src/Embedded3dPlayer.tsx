import { useEffect, createRef, useState } from 'react';
import './embedded-3d-player.css';

interface EmbeddedPlayerProps {
  width?: number;
  height?: number;
}

const EmbeddedPlayer = (props: EmbeddedPlayerProps) => {
  const url = 'http://localhost:9090'

  const ref: any = createRef()

  const [width, setWidth] = useState<number>(props.width || 0)
  const [height, setHeight] = useState<number>(props.height || 0)

  const getDimentions = () => {
    if (ref && ref.current) {
      const { current } = ref
      if(!current) {
        return;
      }

      setWidth(Math.round(current.clientWidth))
      setHeight(Math.round(current.clientHeight))
    }
  }
  
  useEffect(() => {
    getDimentions();
    
    window.addEventListener("resize", () => {
      getDimentions()

    });
    return () => {
      window.removeEventListener("resize", ()=>{})
    }
  });

  console.log("$$$$",`${url}?width=${width}&height=${height}`)

  return (
    <div ref={ref} className="embedded-player-wrapper">
      <iframe src={`${url}?width=${width - 24}&height=${height - 24}`} frameBorder="0" height={height} width={width} />
    </div>
  );
}

export default EmbeddedPlayer;