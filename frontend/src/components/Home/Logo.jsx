import LogoImage from "../../assets/logo.png"

export const Logo = () => {

    return <div className="flex justify-center items-center">
        <a href=""><img className="h-12.5" src={LogoImage} alt="Logo" /></a>
        <a href="/"><h1 className="font-bold">Trip<span className="text-orange-500">Wise</span></h1></a>
    </div>

}