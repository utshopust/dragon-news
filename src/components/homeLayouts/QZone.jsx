// import React from 'react';
// import swimmingImage from "../../assets/swimming.png"
// import classImage from "../../assets/class.png"
// import playImage from "../../assets/playground.png"
// const QZone = () => {
//     return (
//         <div className='bg-base-200 p-3'>
//             <h2 className='mb-5 font-bold'>QZone</h2>
//             <div className="space-y-5">
//             <img src={swimmingImage} alt="" />
//             <img src={classImage} alt="" />
//             <img src={playImage} alt="" />
//             </div>
//         </div>
//     );
// };

// export default QZone;

import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-4 rounded-lg">
      <h2 className="mb-4 font-bold text-lg">QZone</h2>

      <div className="flex flex-col gap-4">

        <img
          src={swimmingImage}
          alt="Swimming"
          className="w-full h-auto rounded-lg object-cover"
        />

        <img
          src={classImage}
          alt="Class"
          className="w-full h-auto rounded-lg object-cover"
        />

        <img
          src={playImage}
          alt="Playground"
          className="w-full h-auto rounded-lg object-cover"
        />

      </div>
    </div>
  );
};

export default QZone;
