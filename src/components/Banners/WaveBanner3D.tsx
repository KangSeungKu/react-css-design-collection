import { assignInlineVars } from "@vanilla-extract/dynamic"
import { item, items, themeVars } from "./waveBanner3D.css"

const WaveBanner3D = () => {
    const dataArr = [
        { id: 0, src: 'https://img.khan.co.kr/lady/r/1100xX/2023/06/29/news-p.v1.20230629.582042fef7334986ab707e99a0662d5e.png' },
        { id: 1, src: 'https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202410/29/happiness/20241029152512132uflg.webp' },
        { id: 2, src: 'https://png.pngtree.com/thumb_back/fw800/background/20230901/pngtree-a-pile-of-orange-carrots-image_13150279.jpg' },
        { id: 3, src: 'https://images.mypetlife.co.kr/content/uploads/2021/06/29144515/sheraz-shaikh-Zx3kcU2Kw9E-unsplash-1024x683.jpg' },
        { id: 4, src: 'https://cdn.imweb.me/thumbnail/20230717/8d1e99e2da587.jpg' },
        { id: 5, src: 'https://visit.ibarakiguide.jp/wp/wp-content/uploads/2022/11/syoku-900x526.jpg' },
        { id: 6, src: 'https://png.pngtree.com/thumb_back/fw800/background/20231107/pngtree-vibrant-citrus-fruits-on-a-green-background-slices-of-lime-and-image_13776477.png' },
        { id: 7, src: 'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/623G/image/79HyROi33kESuyxmMQwz0JNicD4.jpg' },
        { id: 8, src: 'https://i.namu.wiki/i/nZ-acc7hcoYljIzwubPljI1eh88XAdU9k23Ep9X0yZdNeW01KWqrkgKM81qrZ5caBaaWNGpJgAyI-OSue8JqAQ.webp' },
        { id: 9, src: 'https://t1.daumcdn.net/news/202207/21/healthchosun/20220721165303224sszk.jpg' },
        { id: 10, src: 'https://cdn.pixabay.com/photo/2023/08/15/21/17/plums-8192858_1280.jpg' },
        { id: 11, src: 'https://sitem.ssgcdn.com/81/32/00/item/1000523003281_i7_750.jpg' },
    ]

    return (
        <>
            <div className={items}>
                {dataArr.map((data) =>
                    <div id={String(data.id)} tabIndex={0} className={item} style={assignInlineVars(themeVars, {
                        background: { src: `url(${data.src})`}
                    })}/>
                )}
            </div>
        </>
    )
}

export default WaveBanner3D