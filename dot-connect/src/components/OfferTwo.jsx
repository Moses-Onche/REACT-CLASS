import GreyBox from "./Greybox";

const greyData = [
    {
        id: 0,
        h2: 'corporates',
        p: `We give large organizations a shot of
        entreprenurial dynamism`,
        image: {}
    },
    {
        id: 1,
        h2: 'investors',
        p: `We help venture investors generate real
        and tangible innovation`,
        image: {}
    }
]

function OfferTwo() {
    return (
        <section>
            <div className="grey-container">
                <GreyBox data={ greyData[0] } />
                <GreyBox data={ greyData[1] } />
            </div>
        </section>
    )
}

export default OfferTwo;