import React from "react";

const CommunityArea = ({ image_path, desc }) => {
    return (
        <div className="community-area pt-30">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="community-img">
                            <img src={image_path} alt="" />
                        </div>
                        <div className="community-content">
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityArea;
