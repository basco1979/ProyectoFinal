const SvgIcon = ({ src, width, height, className }) => (
 
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height} className={className}/>
);

export default SvgIcon;
