import useAppSelector from "../hooks/useAppSelector";
import SunRise from "../components/SunRise";
import {  Trans, useTranslation } from "react-i18next";
export default function Home(){
    const theme=useAppSelector(state=>state.preferences.theme);
    const {t}=useTranslation();
    const configuration_flex=t('homePage.configurationFlex', {returnObjects:true}) as {flex:string}[];
    const configuration_declarations=t('homePage.configurationDeclarations', {returnObjects:true}) as {declaration:string}[];
    const featureCards=t('homePage.featureCard', {returnObjects:true}) as {title:string,description:string}[];

    return (
        <div className="home-summer shadow-lg">
            { theme=="summer" && <SunRise/>}
                <section className="w-full flex backdrop-blr-xs flex-col items-center justify-center px-6 py-12 relative space-y-12">
                    <h1 className="text-6xl font-bold text-center leading-tight drop-shadow-lg">
                        <Trans i18nKey="homePage.title" />
                    </h1>

                    <div className="text-base max-w-4xl rounded-lg backdrop-blur-md shadow-lg p-6 hover:scale-105 transition text-center leading-relaxed">
                        <Trans i18nKey="homePage.showcase_statement" />
                    </div>

                    {/* Configuration flex */}
                    <div className="text-base max-w-xl rounded-lg backdrop-blur-md shadow-lg p-6 hover:scale-105 transition text-center leading-relaxed">
                        {configuration_flex.map(item=>(
                            <p>{item.flex}</p>
                        ))}
                        {configuration_declarations.map(item=>(
                            <p className="mt-4 font-semibold">{item.declaration}</p>
                        ))}
                    </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                            {featureCards.map(card=>(
                                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md shadow-lg hover:scale-105 transition">
                                    <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                                    <p>{card.description}</p>
                                </div>
                            ))}
                        </div>
                    {/* Final Quote */}
                    {/* <p className="mt-20 text-center text-black/60 text-sm italic">
                        “Every pixel deserves purpose. Every dropdown deserves dignity. And every checkbox deserves confetti.” — bench_works philosophy
                    </p> */}
        </section>
    </div>
    )
}