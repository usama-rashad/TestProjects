import "./Pixel.scss";

interface IPixel {
  on: boolean;
  color?: string;
}

function Pixel(props: IPixel) {
  return <div className={`mainPixel ${props.on ? "on" : "off"}`}></div>;
}

export default Pixel;
