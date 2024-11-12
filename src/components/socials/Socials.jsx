import email_logo from "../../assets/images/email-logo.jpg";
import linkedin_logo from "../../assets/images/LinkedIn_logo_initials.png";
import telegram_logo from "../../assets/images/Telegram_logo.png";
import github_logo from "../../assets/images/github-logo.png";
import location_logo from "../../assets/images/location-logo.png";
import phone_logo from "../../assets/images/phone-logo.png";

import SocialUnit from "./social-unit/SocialUnit";

const socials = [
    {
        logo: linkedin_logo,
        link: "https://linkedin.com/in/yuriy-bodolanov-9287651aa/",
        content: "https://linkedin.com/in/yuriy-bodolanov-9287651aa/",
    },
    {
        logo: email_logo,
        link: "mailto: yuriy.bodolanov@gmail.com",
        content: "yuriy.bodolanov@gmail.com",
    },
    {
        logo: telegram_logo,
        link: "telegram: @bodolanov",
        content: "@bodolanov",
    },
    {
        logo: phone_logo,
        link: "tel: +374-55-206-753",
        content: "+374-55-206-753",
    },
    {
        logo: github_logo,
        link: "https://github.com/Rayn1998",
        content: "https://github.com/Rayn1998",
    },
    {
        logo: location_logo,
        content: "Armenia",
    },
]

const Socials = () => {
    return (
        <div className="socials">
            {socials.map((social, i) => {
                return (
                    <SocialUnit logo={social.logo} content={social.content} link={social.link} key={i} />
                )
            })}
        </div>
    );
};

export default Socials;