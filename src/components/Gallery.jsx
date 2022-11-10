import React, { useEffect, useState } from "react";
import { getSearchedImage, getTrendingImages } from "../api/api";
import Image from "./Image";
import Modal from "react-modal";
import Masonry from "react-masonry-component";

function Gallery({ query }) {
  const [imgList, setImgList] = useState([]);
  const [currentImg, setCurrentImg] = useState(null);

  const modalStyle = {
    content: {
      border: "none",
      padding: "none",
      overflow: "none",
      background: "none",
    },
  };

  useEffect(() => {
    getTrendingImages().then((data) => {
      setImgList(data);
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (!!query) {
        try {
          const data = await getSearchedImage(query);
          setImgList(data);
          // console.log(data);
        } catch (error) {
          console.error(error.message);
        }
      }
    }
    fetchData();
  }, [query]);

  Modal.setAppElement("#root");

  return (
    <div>
      <Modal
        isOpen={!!currentImg}
        onRequestClose={() => setCurrentImg(null)}
        style={modalStyle}
        contentLabel="Image Preview"
      >
        <img className="img-preview" src={currentImg} alt="Image Preview" />
      </Modal>
      {imgList.length === 0 ? <h2>No Images</h2> : null}
      <Masonry className="grid-container" options={{ isFitWidth: true }}>
        {imgList.map((img) => {
          return (
            <Image
              urls={img.urls}
              handleClick={setCurrentImg}
              key={img.id}
              // onMouseOver={() => console.log("You clicked this image")}
            />
          );
        })}
      </Masonry>
    </div>
  );
}

export default Gallery;
