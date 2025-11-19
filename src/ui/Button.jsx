const btnStyle = {
    width: "180px",
    height: "56px",
    borderRadius: "12px",
    border: "2px solid var(--dim-white)",
    fontSize: "22px",
    color: "var(--dim-white)",
    background: "transparent"
};

const Button = ({ children }) => {
    return (
        <button style={btnStyle}>
            {children}
        </button>
    );
};

export default Button;
