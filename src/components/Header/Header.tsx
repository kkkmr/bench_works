import LocaleSelector from "./LocaleSelector"
import FontSelector from "./FontSelector";
export default function Header(){

    return (
        <div className="header flex justify-between bg-primary items-center text-white">
            <div className="flex items-center">
                <span className="w-16 inline-block">
                    <img src="bench_works.svg" alt=""/>
                </span>
                <span className="text-2xl">Bench Works</span>
            </div>
            <ol className="flex gap-4 items-center">
                <li>
                    <LocaleSelector/>
                </li>
                <li>
                    <FontSelector/>
                </li>
                {/* <li>
                    Font size
                </li> */}
                
                {/* <li>
                    Animation
                </li> */}
                {/* <li>
                    Theme
                </li> */}
            </ol>
        </div>
    )
}