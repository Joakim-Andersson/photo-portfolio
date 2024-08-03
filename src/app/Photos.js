"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { fetchPhotos } from './contentful';

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State for selected photo
  const photosPerPage = 12;

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

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseClick = () => {
    setSelectedPhoto(null);
  };

  return (
    <section className={styles.photosSection}>
      {selectedPhoto ? (
        <div className={styles.photoModal}>
          <button className={styles.closeButton} onClick={handleCloseClick}>✕</button>
          <div className={styles.selectedImageContainer}>
            <Image
              src={`https:${selectedPhoto.image}`}
              alt={selectedPhoto.title}
              layout="responsive"
              width={700}
              height={500}
              className={styles.selectedImage}
            />
          </div>
          <div className={styles.photoDetails}>
            <p className={styles.photoTitle}>{selectedPhoto.title}</p>
            <p className={styles.photoPrice}>£30</p>
            <a href="mailto:heytherejoakim@gmail.com" className={styles.requestPrintLink}>Request print</a>
          </div>
        </div>
      ) : (
        <>
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
              currentPhotos.map(photo => (
                <div key={photo.id} className={styles.photoItem} onClick={() => handlePhotoClick(photo)}>
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
        </>
      )}
    </section>
  );
}
