import React, { useEffect, useState } from "react";

const Preloader = ({ duration = 1 }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, duration));
      setLoading(false);
    };

    loadData();
  }, [duration]);

  if (loading) {
    return (
      <div id="preloader">
        <div id="loader" className="loader">
          <div className="loader-container">
            <div className="loader-icon">
              {/* <img src="/img/preloader.png" alt="Preloader" /> */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Preloader;