export interface ButtonProp {
  label: string,
  disabled: boolean,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({label, disabled, onClick}: ButtonProp) => {
  return (
    <div className="p-2 rounded-full button-color text-center">
      <button className="outline-none" onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button