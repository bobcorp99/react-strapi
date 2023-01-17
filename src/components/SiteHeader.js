import React from "react";
import { Link } from "react-router-dom";

export default function SiteHeader() {
    return (
        <div className="SiteHeader">
            <Link to="/"><h1>Reviews</h1></Link>
        </div>
    )
}