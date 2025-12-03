import { navLinks, navIcons} from "#constants"
import dayjs from "dayjs"
const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="apple icon" />
                <p className="font-bold">Abdul Wahab Portfolio</p>
                <ul>
                    {
                        navLinks.map(({id,name}) => (
                            <li key={id}>{name}</li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({id, img}) => (
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>
                <time>{dayjs().format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    )
}

export default Navbar
