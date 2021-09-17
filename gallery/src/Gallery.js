import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "react-responsive-modal";
import "./gallery.css";
import img1 from "./Assets/img1.jpg";
import img2 from "./Assets/img2.jpg";
import img3 from "./Assets/img3.jpg";
import img4 from "./Assets/img4.jpg";
import img5 from "./Assets/img5.jpeg";
import img6 from "./Assets/img6.jpg";
const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },

    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
  ];
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };
  return (
    <>
      <div className={modal ? "modal open" : "modal close"}>
        <img alt="" src={tempImgSrc} />

        <CloseIcon onClick={() => setModal(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="imageCard"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img alt="" src={item.imgSrc} />
              <h3>Image by : Alejandro Escamilla</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
