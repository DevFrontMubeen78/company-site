import { Link } from "react-router-dom"
const ViewMore = (path) => {
    return (
        <div>
            <Link className="custom-btn" to={path}>View More</Link>
        </div>
    )
}

export default ViewMore
