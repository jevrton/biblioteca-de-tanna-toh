import "./styles.css";
import { FC } from "react";

interface ButtonProps {
    handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    text: string;
    type: string;
};

const Button : FC <ButtonProps> = ({handleClick, text, type}: ButtonProps) => {
    return (
        <div>
            <button className={`btn btn-${type}`} onClick={handleClick}>{text}</button>
        </div>
    );
}

export default Button;