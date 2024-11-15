import { squishyButtonStyle } from "./squishyButton.css";

interface Props {
    text?: string;
}

const SquishyButton = ({
    text = 'Please enter text',
}: Props) => {
  return (
    <button className={squishyButtonStyle}>{text}</button>
  )
}

export default SquishyButton