import './footer.scss';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer>
            <p>{`Copyright in a ${date}`}</p>
        </footer>
    )
}

export default Footer;