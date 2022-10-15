import '../css/LoadingSpinner.css'

export default function LoadingSpinner(){
    return(
        <div className="loading-spinner">     
            <div className="loading-spinner-animation">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h2 className="loading-spinner-text">Fetching new questions</h2>
        </div>
    )
}