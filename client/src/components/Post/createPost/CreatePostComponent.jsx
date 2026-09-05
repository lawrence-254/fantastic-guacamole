import React, { useState } from "react";
import "./createPostComponent.css";
import ImageGallery from "./imageGalleryCard/ImageGalleryCard";
import PlusIcon from "../../../assets/post/createPost/plusIcon.svg";
import ImageIcon from "../../../assets/post/createPost/imageIcon.svg";
import ColorIcon from "../../../assets/post/createPost/colorIcon.svg";
import TextIcon from "../../../assets/post/createPost/textIcon.svg";
import AlignIcon from "../../../assets/post/createPost/alignIcon.svg";
import LinkIcon from "../../../assets/post/createPost/linkIcon.svg";
import VideoIcon from "../../../assets/post/createPost/videoIcon.svg";
import SelectPlusIcon from "../../../assets/post/createPost/selectPlusIcon.svg";
import DraftIcon from "../../../assets/post/createPost/draftIcon.svg";
import PreviewIcon from "../../../assets/post/createPost/previewIcon.svg";
import PublicIcon from "../../../assets/post/createPost/publicIcon.svg";
import ImageGalleryBigIcon from "../../../assets/post/createPost/imageGalleryBigIcon.svg";
import ImageGalleryAreaPlusSelectIcon from "../../../assets/post/createPost/imageGalleryAreaPlusSelectIcon.svg";
import galleryDog1 from "../../../assets/post/createPost/galleryDog1.svg";
import galleryDog2 from "../../../assets/post/createPost/galleryDog2.svg";

const GalleryImages = [galleryDog1, galleryDog2];

// function CreatePostComponent() {
//   const [postType, setPostType] = useState("video");

//   return (
//     <div className="createPostComponentContainer">
//       <div className="createPostComponentNavigation">
//         <button
//           className={postType === "post" ? "active" : ""}
//           onClick={() => setPostType("post")}
//         >
//           Send Post
//         </button>
//         <button
//           className={postType === "video" ? "active" : ""}
//           onClick={() => setPostType("video")}
//         >
//           Send Video
//         </button>
//       </div>
//       {/* <div>
//         <VideoPost />
//       </div> */}
//       {postType === "video" ? <VideoPost /> : <ImagePost />}
//     </div>
//   );
// }
function CreatePostComponent() {
  const [postType, setPostType] = useState("video");

  const postTypes = [
    { id: "image", label: "Image Post", component: <ImagePost /> },
    { id: "video", label: "Video Post", component: <VideoPost /> },
  ];

  return (
    <div className="createPostComponentContainer">
      <nav className="createPostComponentNavigation" role="tablist">
        {postTypes.map(({ id, label }) => (
          <button
            key={id}
            className={postType === id ? "active" : ""}
            onClick={() => setPostType(id)}
            role="tab"
            aria-selected={postType === id}
            aria-controls={`panel-${id}`}
          >
            {label}
          </button>
        ))}
      </nav>
      <div>
        {postTypes.find(({ id }) => id === postType)?.component || (
          <ImagePost />
        )}
      </div>
    </div>
  );
}

// function VideoPost() {
//   const [title, setTitle] = useState("");
//   const [tags, setTags] = useState([]);
//   const [newTag, setNewTag] = useState("");
//   const [video, setVideo] = useState(null);
//   const [images, setImages] = useState(GalleryImages);

//   const handleAddTag = () => {
//     if (newTag.trim()) {
//       setTags((prev) => [...prev, newTag.trim()]);
//       setNewTag("");
//     }
//     console.log("tag");
//   };

//   const handleVideoUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setVideo(URL.createObjectURL(file));
//     }
//     console.log("vid up", event);
//   };

//   const handleImageUpload = (event) => {
//     console.log("img up", event);

//     const files = Array.from(event.target.files);
//     const newImages = files.map((file) => URL.createObjectURL(file));
//     setImages((prev) => [...prev, ...newImages].slice(0, 10)); // Limit to 10 images
//   };

//   return (
//     <form className="form" onSubmit={(e) => e.preventDefault()}>
//       <div className="formContainer">
//         <div className="leftSection">
//           <div className="topLeftSection">
//             <div className="formItem">
//               <label htmlFor="title">Title</label>
//               <span>
//                 <input
//                   id="title"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   aria-label="Post title"
//                 />
//               </span>
//             </div>
//             <div className="formItem">
//               <label htmlFor="tag">Add Tag</label>
//               <span>
//                 <input
//                   id="tag"
//                   value={newTag}
//                   onChange={(e) => setNewTag(e.target.value)}
//                   aria-label="Add a tag"
//                 />
//                 <button
//                   type="button"
//                   onClick={handleAddTag}
//                   aria-label="Add tag"
//                 >
//                   <img src={PlusIcon} alt="Add tag icon" />
//                 </button>
//               </span>
//               <div className="tagsList">
//                 {tags.map((tag, index) => (
//                   <span key={index} className="tag">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="explanationArea">
//             <label htmlFor="explanation">Explanation</label>
//             <span>
//               <div className="explanationMenu">
//                 <button type="button" aria-label="Insert image">
//                   <img src={ImageIcon} alt="Image icon" />
//                   Image
//                 </button>
//                 <button type="button" aria-label="Change color">
//                   <img src={ColorIcon} alt="Color icon" />
//                   Color
//                 </button>
//                 <button type="button" aria-label="Format text">
//                   <img src={TextIcon} alt="Text icon" />
//                   Text
//                 </button>
//                 <button type="button" aria-label="Align text">
//                   <img src={AlignIcon} alt="Align icon" />
//                   Align
//                 </button>
//                 <button type="button" aria-label="Insert link">
//                   <img src={LinkIcon} alt="Link icon" />
//                   Link
//                 </button>
//               </div>
//               <textarea id="explanation" aria-label="Post explanation" />
//             </span>
//           </div>
//         </div>
//         <div className="rightSection">
//           <div>
//             <label htmlFor="video-upload">Add Video</label>
//             <div className="addMediaMainContainer">
//               <div className="addMediaInnerContainer">
//                 <img src={VideoIcon} alt="Video upload icon" />
//                 <p>Drop video here, paste, or</p>
//                 <button type="button" aria-label="Select video">
//                   <imf src={SelectPlusIcon} alt="Select icon" />
//                   Select
//                   <input
//                     id="video-upload"
//                     type="file"
//                     accept="video/*"
//                     onChange={handleVideoUpload}
//                     style={{ display: "none" }}
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="actionButtonArea">
//             <button type="button" aria-label="Save as draft">
//               <img src={DraftIcon} alt="Draft icon" />
//               Draft
//             </button>
//             <button type="button" aria-label="Preview post">
//               <img src={PreviewIcon} alt="Preview icon" />
//               Preview
//             </button>
//             <button type="button" aria-label="Publish post">
//               <img src={PublicIcon} alt="Public icon" />
//               Public
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="videoFormFooterSection">
//         <label htmlFor="image-upload">Image Gallery</label>
//         <div className="imageGalleryContainer">
//           <div className="leftGalleryArea">
//             <div className="innerLeftGalleryArea">
//               <img src={ImageGalleryBigIcon} alt="Image upload icon" />
//               <p>Drop image here, paste, or</p>
//               <button type="button" aria-label="Select images">
//                 <img
//                   src={ImageGalleryAreaPlusSelectIcon}
//                   alt="Select image icon"
//                 />
//                 Select
//                 <input
//                   id="image-upload"
//                   type="file"
//                   accept="image/*"
//                   multiple
//                   onChange={handleImageUpload}
//                   style={{ display: "none" }}
//                 />
//               </button>
//             </div>
//           </div>
//           <div className="rightGalleryArea">
//             <ImageGallery initialImages={images} maxSlots={10} />
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }
function VideoPost() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [video, setVideo] = useState(null);
  const [images, setImages] = useState([]); // Initialize as empty array

  const handleAddTag = () => {
    if (newTag.trim()) {
      setTags((prev) => [...prev, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideo(URL.createObjectURL(file));
    }
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages].slice(0, 10)); // Limit to 10 images
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log({ title, tags, video, images });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="formContainer">
        <div className="leftSection">
          <div className="topLeftSection">
            <div className="formItem">
              <label htmlFor="title">Title</label>
              <span>
                <input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  aria-label="Post title"
                  type="text"
                />
              </span>
            </div>
            <div className="formItem">
              <label htmlFor="tag">Add Tag</label>
              <span>
                <input
                  id="tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  aria-label="Add a tag"
                  type="text"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  aria-label="Add tag"
                >
                  <img src={PlusIcon} alt="Add tag icon" />
                </button>
              </span>
              <div className="tagsList">
                {tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="explanationArea">
            <label htmlFor="explanation">Explanation</label>
            <span>
              <div className="explanationMenu">
                <button type="button" aria-label="Insert image">
                  <img src={ImageIcon} alt="Image icon" />
                  Image
                </button>
                <button type="button" aria-label="Change color">
                  <img src={ColorIcon} alt="Color icon" />
                  Color
                </button>
                <button type="button" aria-label="Format text">
                  <img src={TextIcon} alt="Text icon" />
                  Text
                </button>
                <button type="button" aria-label="Align text">
                  <img src={AlignIcon} alt="Align icon" />
                  Align
                </button>
                <button type="button" aria-label="Insert link">
                  <img src={LinkIcon} alt="Link icon" />
                  Link
                </button>
              </div>
              <textarea id="explanation" aria-label="Post explanation" />
            </span>
          </div>
        </div>
        <div className="rightSection">
          <div>
            <label htmlFor="video-upload">Add Video</label>
            <div className="addMediaMainContainer">
              <div className="addMediaInnerContainer">
                <img src={VideoIcon} alt="Video upload icon" />
                <p>Drop video here, paste, or</p>
                <button type="button" aria-label="Select video">
                  <img src={SelectPlusIcon} alt="Select icon" />
                  Select
                  <input
                    id="video-upload"
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    style={{ display: "none" }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="actionButtonArea">
            <button type="button" aria-label="Save as draft">
              <img src={DraftIcon} alt="Draft icon" />
              Draft
            </button>
            <button type="button" aria-label="Preview post">
              <img src={PreviewIcon} alt="Preview icon" />
              Preview
            </button>
            <button type="submit" aria-label="Publish post">
              <img src={PublicIcon} alt="Public icon" />
              Public
            </button>
          </div>
        </div>
      </div>
      <div className="videoFormFooterSection">
        <label htmlFor="image-upload">Image Gallery</label>
        <div className="imageGalleryContainer">
          <div className="leftGalleryArea">
            <div className="innerLeftGalleryArea">
              <img src={ImageGalleryBigIcon} alt="Image upload icon" />
              <p>Drop image here, paste, or</p>
              <button type="button" aria-label="Select images">
                <img
                  src={ImageGalleryAreaPlusSelectIcon}
                  alt="Select image icon"
                />
                Select
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </button>
            </div>
          </div>
          <div className="rightGalleryArea">
            <ImageGallery initialImages={images} maxSlots={10} />
          </div>
        </div>
      </div>
    </form>
  );
}
function ImagePost() {
  return (
    <form className="form">
      <div className="formContainer">
        <div className="leftSection">
          <div className="topLeftSection">
            <div className="formItem">
              <label>title</label>
              <span>
                <input />
              </span>
            </div>
            <div className="formItem">
              <label>add tag</label>
              <span>
                <input />
                <img alt="img" src={PlusIcon} />
              </span>
            </div>
          </div>
          <div className="explanationArea">
            <label>Explanation</label>
            <span>
              <div className="explanationMenu">
                <button>
                  <img src={ImageIcon} alt="image" />
                  image
                </button>
                <button>
                  <img src={ColorIcon} alt="color" />
                  color
                </button>
                <button>
                  <img src={TextIcon} alt="text" />
                  text
                </button>
                <button>
                  <img src={AlignIcon} alt="align" />
                  align
                </button>
                <button>
                  <img src={LinkIcon} alt="link" />
                  link
                </button>
              </div>
              <></>
            </span>
          </div>
        </div>
        <div className="rightSection">
          <div>
            <label>Add Image</label>
            <div className="addMediaMainContainer">
              <div className="addMediaInnerContainer">
                <img src={PlusIcon} />
                <p>Drop Image Here, Paste or</p>
                <button>
                  <img src={SelectPlusIcon} /> Select
                </button>
              </div>
            </div>
          </div>
          <div className="actionButtonArea">
            <button>
              <img src={DraftIcon} />
              draft
            </button>
            <button>
              <img src={PreviewIcon} />
              preview
            </button>
            <button>
              <img src={PublicIcon} />
              public
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreatePostComponent;
