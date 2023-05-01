

function Button({children, styles, onClick}) {

    return (
        <button className={styles} onClick={onClick}>{children}</button>
    );
}

export default Button;