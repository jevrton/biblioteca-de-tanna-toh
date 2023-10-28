import "./styles.css";

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({handleClick}: ButtonProps) => {
    return (
        <button className="btn" onClick={handleClick}>Adicionar Ficha</button>
    );
}

export default Button;