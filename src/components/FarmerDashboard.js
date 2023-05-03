import React from "react";
import Layout from "./Layout";

function FarmerDashboard() {
  return (
    <Layout>
      <div className="addcrop">
        <div className="background">
          <h1 className="yourCrop">YOUR CROP</h1>
        </div>

        <button className="">Add Crops</button>
        <p>
          Crops are plants, or products made from plants, that are grown and
          harvested for subsistence or for profit. Crops are typically divided
          into six categories: food crops, feed crops, fiber crops, oil crops,
          ornamental crops, and industrial crops.
        </p>
      </div>
    </Layout>
  );
}

export default FarmerDashboard;
