import { assignInlineVars } from "@vanilla-extract/dynamic";
import { bounce, chip, grow, themeVars } from "./togglePillButton.css"
import { ChangeEvent } from "react";
import clsx from "clsx";

interface Props {
    type?: 'slide' | 'grow' | 'bounce' | 'disabled';
    checked: boolean;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    brandColor?: string;
    value?: string;
    disabled?: boolean;
}

const TogglePillButton = ({
    type = 'slide',
    checked,
    onChange,
    brandColor = "#6c6",
    value = "Pear",
    disabled = false,
}: Props) => {
  return (
    <>
        <input 
            type="checkbox" 
            className={clsx(chip, {
                [grow]: type === 'grow',
                [bounce]: type === 'bounce', 
            })} 
            role="switch" 
            name={type + value}
            value={value} 
            aria-label={value} 
            disabled={disabled} 
            checked={checked} 
            onChange={(e) => onChange(e)}
            style={
                assignInlineVars(themeVars, {
                    color: {
                        brand: disabled ? '#eee' : brandColor,
                    }
                })
            } 
        />
    </>
  )
}

export default TogglePillButton