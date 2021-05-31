import React from "react";
import Image from "next/image";
const Contributers = () => {
  return (
    <>
      <div id="4" className="titles-container">
        <span> همیاران </span>
      </div>
      <div className="contributors-container">
        <Image
          src="/images/kuknos.png"
          alt="Picture of the author"
          width={348}
          height={96}
          layout="intrinsic"
        />
      </div>
    </>
  );
};

export default Contributers;
