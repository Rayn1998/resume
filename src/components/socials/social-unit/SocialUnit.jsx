
const SocialUnit = ({ logo, content, link }) => {
    const handle_click = () => {
        window.open(link, "_blank");
    }
    return (
        <div 
            className="social_unit" 
            onClick={() => handle_click()}
            style={{cursor: "pointer"}}
        >
            <img src={logo} className="social_unit_image" alt="social-icon" />
            <p>{content}</p>
        </div>
    );
};

export default SocialUnit;
