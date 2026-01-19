import './GreyBox.css'

function GreyBox({ data }) {
    return (
        <div className="grey-box">
            <h2>{ data.h2 }</h2>
            <p>{ data.p }</p>
            <img src="" alt="" />
        </div>
    )
}

export default GreyBox;