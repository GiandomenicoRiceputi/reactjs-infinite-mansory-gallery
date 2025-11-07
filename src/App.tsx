import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import { Gallery, ImageData } from './components/Gallery';
import { fetchUnsplashPhotos, UnsplashPhoto } from './services/unsplashService';



// Convert Unsplash format to your ImageData format
const convertUnsplashData = (photos: UnsplashPhoto[]): ImageData[] => {
  return photos.map(photo => ({
    src: photo.urls.regular,
    alt: photo.alt_description || photo.description || `Photo by ${photo.user.name}`,
    title: photo.description || `Beautifull Photo`,
    description: `By ${photo.user.name}`
  }));
};


function App() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const sentInterRef = useRef<HTMLDivElement>(null);


  // Load initial photos when component mounts
  useEffect(() => {
    const loadInitialPhotos = async () => {
      try {
        setIsLoading(true);
        const photos = await fetchUnsplashPhotos(1, 12);
        const imageData = convertUnsplashData(photos);
        setImages(imageData);
      } catch (error) {
        console.error('Failed to load initial photos:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadInitialPhotos();
  }, []);

  const loadMoreImages = useCallback(async () => {
    try {
      setIsLoading(true);
      const photos = await fetchUnsplashPhotos(page + 1, 12);
      const newImageData = convertUnsplashData(photos);
      setImages(prevImages => [...prevImages, ...newImageData]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Failed to load more photos:', error);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoading) {
          loadMoreImages();
        }
      },
      { threshold: 0.1 }
    );

    if (sentInterRef.current) {
      observer.observe(sentInterRef.current);
    }

    return () => observer.disconnect();
  }, [isLoading, loadMoreImages]);





  return (
    <div className="App">
      <Gallery
        images={images}
        onImageClick={(image: ImageData) => console.log('Cliked:', image.title)}
        onImageDownload={(image: ImageData) => console.log('Download:', image.title)}
      />
      <div ref={sentInterRef} id="scroll-sentinel" style={{ height: '20px', backgroundColor: 'transparent' }}>
      </div>
    </div>
  );
}

export default App;
