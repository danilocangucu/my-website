export const Footer = () => (
    <div className="footer-body">
        <Link title="LinkedIn" link="https://www.linkedin.com/in/danilo-cangu%C3%A7u-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-a5731122/"/>
        <Link title="GitHub" link="https://github.com/danilocangucu"/>
        <Link title="E-mail" link="malito:danilocangucu@gmail.com"/>
    </div>
)


const Link = ({title, link}) => (
        <div className="footer-link">
            <a href={link}>{title}</a>
        </div>
)

export default Footer