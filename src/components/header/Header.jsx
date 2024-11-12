import avatar from '../../assets/images/avatar.png';

const Header = () => {
    return(
        <header className="header">
            <img src={avatar} className="header_avatar" alt="avatar" />
            <div className="header_text_block">
                <h1 className="header_name">Yuriy Bodolanov</h1>
                <p className="header_specialty">Frontend Developer (React)</p>
                <p className="header_description">
                    Passionate about developing and maintaining new web products.
                    Feel free to contact me</p>
            </div>
        </header>
    );
}

export default Header;