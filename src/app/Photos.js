"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import styles from './page.module.css';
import { fetchPhotos } from './contentful';

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const photosPerPage = 12;
  const [isAnimating, setIsAnimating] = useState(false); // To prevent multiple clicks during animation

  useEffect(() => {
    const getPhotos = async () => {
      const data = await fetchPhotos();
      setPhotos(data);
      setLoading(false);
    };
    getPhotos();
  }, []);

  const uniqueTags = Array.from(new Set(photos.flatMap(photo => photo.tags)));

  const filteredPhotos = selectedTag
    ? photos.filter(photo => photo.tags.includes(selectedTag))
    : photos;

  const indexOfLastPhoto = currentPage * photosPerPage;
  const currentPhotos = filteredPhotos.slice(0, indexOfLastPhoto);

  const loadMorePhotos = () => {
    if (indexOfLastPhoto < filteredPhotos.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const animateTransition = (nextIndex) => {
    if (isAnimating) return; // Prevent running another animation during an ongoing one
    setIsAnimating(true);

    const container = document.querySelector(`.${styles.selectedImageContainer}`);
  
    // Animate the CSS variable --width for the camera shutter effect
    gsap.to(container, {
      '--width': '100%', // Close the shutter
      ease: 'power1.inOut', // Easing for the camera shutter effect
      duration: 0.75,
      onComplete: () => {
        // Update the selected photo and details after the shutter closes
        setSelectedPhotoIndex(nextIndex);
        
        // Reopen the shutter
        gsap.to(container, {
          '--width': '0%', // Open the shutter
          ease: 'power1.inOut',
          duration: 1,
          onComplete: () => {
            setIsAnimating(false); // Allow new animations after completing the current one
          }
        });
      }
    });
  };

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
    setTimeout(() => {
      gsap.fromTo(".photoModal",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power4.out" }
      );
    }, 0);
  };

  const handleCloseClick = () => {
    gsap.to(".photoModal",
      { scale: 0, opacity: 0, duration: 0.5, ease: "power4.in", onComplete: () => setSelectedPhotoIndex(null) }
    );
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex < filteredPhotos.length - 1) {
      animateTransition(selectedPhotoIndex + 1);
    }
  };

  const handlePreviousPhoto = () => {
    if (selectedPhotoIndex > 0) {
      animateTransition(selectedPhotoIndex - 1);
    }
  };

  return (
    <section className={styles.photosSection}>
      {selectedPhotoIndex !== null && (
        <div className={`${styles.photoModal} photoModal`}>
          <button className={styles.closeButton} onClick={handleCloseClick}>✕</button>
          <button 
            className={`${styles.arrowButton} ${styles.leftArrow}`} 
            onClick={handlePreviousPhoto}
            disabled={selectedPhotoIndex === 0}
          >←</button>
          <div className={styles.selectedImageWrapper}>
            <div className={styles.selectedImageContainer}>
              <Image
                src={`https:${filteredPhotos[selectedPhotoIndex].image}`}
                alt={filteredPhotos[selectedPhotoIndex].title}
                layout="responsive"
                width={700}
                height={500}
                className={styles.selectedImage}
              />
            </div>
            <div className={styles.photoDetails}>
              <p className={styles.photoTitle}>{filteredPhotos[selectedPhotoIndex].title}</p>
              <p className={styles.photoPrice}>£30</p>
              <a href="mailto:heytherejoakim@gmail.com" className={styles.requestPrintLink}>Request print</a>
            </div>
          </div>
          <button 
            className={`${styles.arrowButton} ${styles.rightArrow}`} 
            onClick={handleNextPhoto}
            disabled={selectedPhotoIndex === filteredPhotos.length - 1}
          >→</button>
        </div>
      )}
      <div className={styles.filterSection}>
        <button 
          onClick={() => {
            setSelectedTag('');
            setCurrentPage(1);
          }} 
          className={selectedTag === '' ? styles.activeFilter : ''}
        >
          all
        </button>
        {uniqueTags.map(tag => (
          <button 
            key={tag} 
            onClick={() => {
              setSelectedTag(tag);
              setCurrentPage(1);
            }}
            className={selectedTag === tag ? styles.activeFilter : ''}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className={styles.photoSection}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          currentPhotos.map((photo, index) => (
            <div key={photo.id} className={styles.photoItem} onClick={() => handlePhotoClick(index)}>
              <Image
                src={`https:${photo.image}`}
                alt={photo.title}
                width={300}
                height={200}
                className={styles.photoImage}
              />
            </div>
          ))
        )}
      </div>
      {indexOfLastPhoto < filteredPhotos.length && (
        <div className={styles.seeMore}>
          <button onClick={loadMorePhotos}>see more</button>
        </div>
      )}
    </section>
  );
}
