import { useSelector } from "react-redux";
import "./SpotsListPage.css";

const SpotsListPage = () => {
    const spots = useSelector(state => state.spots);

    const spotsArr = Object.values(spots);

    return (
        <>
            <h2>Spots List</h2>
            {spotsArr.length <= 0 &&
                <span>No Spots Available Right Now</span>
            }
        </>
    )
}

export default SpotsListPage;
