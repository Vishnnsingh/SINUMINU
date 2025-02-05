import React, { useState, useRef } from 'react';
import Styles from './DragAndDrop.module.css';
import IMg1 from "../../assets/1.png";
import IMg2 from "../../assets/2.png";
import IMg3 from "../../assets/3.png";
import IMg4 from "../../assets/22.png";
import 'animate.css';


const DragAndDrop = () => {
  const [images, setImages] = useState([
    { id: 1, src: IMg1 },
    { id: 2, src: IMg2 },
    { id: 3, src: IMg3 },
    { id: 4, src: IMg4 },
    { id: 5, src: IMg1 },
    { id: 6, src: IMg3 },
    { id: 7, src: IMg4 },
    { id: 8, src: IMg1 },
    { id: 9, src: IMg2 },
  ]);

  const [draggedImageIndex, setDraggedImageIndex] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [hoveringIndex, setHoveringIndex] = useState(null);

  const containerRef = useRef();

  const handleDragStart = (index, e) => {
    setDraggedImageIndex(index);
    setDragging(true);
    e.dataTransfer.setData("text", "");
  };

  const handleDragEnd = () => {
    setDragging(false);
    setHoveringIndex(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    setPosition({
      left: mouseX - 75, 
      top: mouseY - 75,
    });

    const mouseOverIndex = images.findIndex((image, index) => {
      const imageElement = containerRef.current.children[index];
      const rect = imageElement.getBoundingClientRect();
      return e.clientX > rect.left && e.clientX < rect.right && e.clientY > rect.top && e.clientY < rect.bottom;
    });

    if (mouseOverIndex !== -1 && mouseOverIndex !== draggedImageIndex) {
      setHoveringIndex(mouseOverIndex);
    }
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    if (draggedImageIndex !== null && draggedImageIndex !== index) {
      const newImages = [...images];
      const draggedImage = newImages[draggedImageIndex];
      newImages.splice(draggedImageIndex, 1);
      newImages.splice(index, 0, draggedImage);
      setImages(newImages);
    }
    setDragging(false);
    setHoveringIndex(null);
  };

  return (
    <div ref={containerRef} className={Styles.container}>
      {images.map((image, index) => (
        <div
          key={image.id}
          draggable
          onDragStart={(e) => handleDragStart(index, e)}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          className={`${dragging && draggedImageIndex === index ? Styles.none : ''} 
            ${hoveringIndex === index && dragging ? Styles.ballBounce : ''} 
            ${hoveringIndex === index && dragging ? Styles.hidden : ''} 
            ${Styles.imageContainer}`}
          style={{
            transform: dragging && draggedImageIndex === index
              ? `translate(${position.left}px, ${position.top}px)`
              : 'none',
          }}
        >
          <img   src={image.src} alt={`Image ${image.id}`} />
        </div>
      ))}
    </div>
  );
};

export default DragAndDrop;
