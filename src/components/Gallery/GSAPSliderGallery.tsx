import GSAPSlider from "../Banners/GSAPSlider"

const GSAPSliderGallery = () => {
    const data = [
        {
            label: 'Pear',
            logoColor: '#03403F',
            buttonColor: '#03403F',
            waveColor: '#C9E78A',
        },
        {
            label: 'Apple',
            logoColor: '#EC4458',
            buttonColor: '#EC4458',
            waveColor: '#FFB2B2',
        },
        {
            label: 'Exotic',
            logoColor: '#6464FF',
            buttonColor: '#6464FF',
            waveColor: '#C1BFF2',
        },
    ]
    return (
        <GSAPSlider data={data}/>
    )
}

export default GSAPSliderGallery