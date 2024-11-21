import clsx from "clsx";
import { action, aside, cAccordion, container, content, description, item, themeVars, title, titleHero, titleHoverHide, titleHoverShow } from "./landingBanner.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { LandingItem } from "../../types/banner/LandingBannerType";

interface Props {
    data: LandingItem[];
    noImageBg?: string;
}

const LandingBanner = ({
    data,
    noImageBg = '#3E66A0',
}: Props) => {
  return (
    <div className={container}>
      <ul className={cAccordion}>
        {data.map((landingItem) => 
            <li
                id={landingItem.id}
                key={landingItem.id}
                className={item}
                style={assignInlineVars(themeVars, {
                    primaryColor: noImageBg,
                    cover: `url(${landingItem.cover})`
                })}
            >
                <a href={`#${landingItem.id}`} className={action}>
                <div className={content}>
                    <h2 className={clsx(title, titleHero, titleHoverShow)}>
                        {landingItem.title}
                    </h2>
                    <p className={description}>
                        {landingItem.description}
                    </p>
                </div>
                <div className={aside}>
                    <h2 className={clsx(title, titleHoverHide)}>
                        {landingItem.aside}
                    </h2>
                </div>
                </a>
            </li>
        )}
      </ul>
    </div>
  );
};

export default LandingBanner;
