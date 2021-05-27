import LeftContentBlock from "./LeftContentBlock";
import LeftContentBlock2 from "./LeftContentBlock2";
import RightContentBlock from "./RightContentBlock";

const ContentBlock = (props) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "left2") return <LeftContentBlock2 {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;

  return null;
};

export default ContentBlock;
