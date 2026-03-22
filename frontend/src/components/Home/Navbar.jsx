import { Logo } from "./Logo"
import { NavIcon } from "./NavIcons"

export const Navbar = () => {

    return (
        <div className="flex justify-between items-center w-full p-3 shadow-md">
            <Logo></Logo>

            <div className="flex justify-center items-center gap-2">
                <NavIcon name="About" navigateTo="/about"></NavIcon>
                <NavIcon name="Login" navigateTo="/login"></NavIcon>
                <NavIcon name="Explore" navigateTo="/explore"></NavIcon>
            </div>
        </div>
    )

}