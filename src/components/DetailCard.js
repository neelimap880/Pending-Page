import React from "react";
import Image from "next/image"; // Next.js optimized image handling
import "./DetailCard.css";

const DetailCard = () => {
  return (
    <div className="container">
      <div className="column1">
        {/* Next.js optimized image */}
        <Image src={url} alt="Detail image" width={50} height={50} />
        <div className="row1">
          <p className="paraStyle">{para}</p>
          <p className="bodeStyle">{bode}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
