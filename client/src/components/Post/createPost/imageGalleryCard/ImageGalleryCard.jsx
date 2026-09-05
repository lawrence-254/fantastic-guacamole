// import React, { useState } from "react";
// import "./imageGalleryCard.css";

// import FaTrash from "../../../../assets/post/createPost/deleteIcon.svg";
// import placeholderImage from "../../../../assets/post/createPost/galleryPlaceholderIcon.svg";
// const ImageGallery = ({ initialImages = [] }) => {
//   const [images, setImages] = useState(initialImages);

//   // Create array of 10 slots, filling with images or null (for Placeholder)
//   const displayImages = Array(10)
//     .fill(null)
//     .map((_, index) => images[index] || null);

//   // Handle image deletion
//   const handleDelete = (index) => {
//     setImages((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="gallery">
//       {displayImages.map((image, index) => (
//         <div
//           key={`${image || "placeholder"}-${index}`}
//           className="image-container"
//         >
//           {image ? (
//             <>
//               <img
//                 src={image}
//                 alt={`Image ${index + 1}`}
//                 className="gallery-image"
//               />
//               <button
//                 className="delete-button"
//                 onClick={() => handleDelete(index)}
//                 aria-label="Delete image"
//               >
//                 <FaTrash className="delete-icon" />
//               </button>
//             </>
//           ) : (
//             <Placeholder />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;

// const Placeholder = () => {
//   return (
//     <div className="placeholderContainer">
//       <div className="innerPlaceholderContainer">
//         <img src={placeholderImage} />
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import "./imageGalleryCard.css";
import FaTrash from "../../../../assets/post/createPost/deleteIcon.svg";
import placeholderImage from "../../../../assets/post/createPost/galleryPlaceholderIcon.svg";

const ImageGallery = ({ initialImages = [], maxSlots = 10 }) => {
  const [images, setImages] = useState(initialImages);

  // Create array of maxSlots, filling with images or null
  const displayImages = Array(maxSlots)
    .fill(null)
    .map((_, index) => images[index] || null);

  // Handle image deletion
  const handleDelete = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="gallery">
      {displayImages.map((image, index) => (
        <div
          key={`${image || "placeholder"}-${index}`}
          className="image-container"
        >
          {image ? (
            <>
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
              />
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
                aria-label={`Delete image ${index + 1}`}
              >
                <FaTrash
                  className="delete-icon"
                  role="img"
                  aria-label="Delete icon"
                />
              </button>
            </>
          ) : (
            <Placeholder />
          )}
        </div>
      ))}
    </div>
  );
};

const Placeholder = () => {
  return (
    <div className="placeholderContainer">
      <div className="innerPlaceholderContainer">
        <img src={placeholderImage} alt="Placeholder for image slot" />
      </div>
    </div>
  );
};

export default ImageGallery;
