import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import { Gallery, ImageData } from './components/Gallery';





function App() {
  const [images, setImages] = useState<ImageData[]>([

    {
      src: "https://picsum.photos/300/600",
      alt: "Tall image",
      title: "Skyscraper",
      description: "A very tall building"
    },
    {
      src: "https://picsum.photos/300/250",
      alt: "Short image",
      title: "Landscape",
      description: "A wide landscape view"
    },
    {
      src: "https://picsum.photos/300/450",
      alt: "Medium image",
      title: "Portrait",
      description: "A classic portrait"
    },
    {
      src: "https://picsum.photos/300/600",
      alt: "Tall image",
      title: "Skyscraper",
      description: "A very tall building"
    },
    {
      src: "https://picsum.photos/300/250",
      alt: "Short image",
      title: "Landscape",
      description: "A wide landscape view"
    },
    {
      src: "https://picsum.photos/300/450",
      alt: "Medium image",
      title: "Portrait",
      description: "A classic portrait"
    },
    {
      src: "https://picsum.photos/300/600",
      alt: "Tall image",
      title: "Skyscraper",
      description: "A very tall building"
    },
    {
      src: "https://picsum.photos/300/250",
      alt: "Short image",
      title: "Landscape",
      description: "A wide landscape view"
    },
    {
      src: "https://picsum.photos/300/450",
      alt: "Medium image",
      title: "Portrait",
      description: "A classic portrait"
    },
    {
      src: "https://picsum.photos/300/600",
      alt: "Tall image",
      title: "Skyscraper",
      description: "A very tall building"
    },
    {
      src: "https://picsum.photos/300/250",
      alt: "Short image",
      title: "Landscape",
      description: "A wide landscape view"
    },
    {
      src: "https://picsum.photos/300/450",
      alt: "Medium image",
      title: "Portrait",
      description: "A classic portrait"
    },
    {
      src: "https://picsum.photos/300/600",
      alt: "Tall image",
      title: "Skyscraper",
      description: "A very tall building"
    },
    {
      src: "https://picsum.photos/300/250",
      alt: "Short image",
      title: "Landscape",
      description: "A wide landscape view"
    },
    {
      src: "https://picsum.photos/300/450",
      alt: "Medium image",
      title: "Portrait",
      description: "A classic portrait"
    },
    {
      src: "https://picsum.photos/300/600",
      alt: "Tall image",
      title: "Skyscraper",
      description: "A very tall building"
    },
    {
      src: "https://picsum.photos/300/250",
      alt: "Short image",
      title: "Landscape",
      description: "A wide landscape view"
    },
    {
      src: "https://picsum.photos/300/450",
      alt: "Medium image",
      title: "Portrait",
      description: "A classic portrait"
    }
  ]);

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);


    const loadMoreImages = useCallback(() => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const newImages: ImageData[] = [
        {
          src: `https://picsum.photos/300/${400 + Math.floor(Math.random() * 300)}?random=${Date.now()}`,
          alt: `Random image ${images.length + 1}`,
          title: `Dynamic Image ${images.length + 1}`,
          description: `Loaded on page ${page + 1}`
        },
        {
          src: `https://picsum.photos/300/${300 + Math.floor(Math.random() * 400)}?random=${Date.now() + 1}`,
          alt: `Random image ${images.length + 2}`,
          title: `Dynamic Image ${images.length + 2}`,
          description: `Loaded on page ${page + 1}`
        },
        {
          src: `https://picsum.photos/300/${350 + Math.floor(Math.random() * 350)}?random=${Date.now() + 2}`,
          alt: `Random image ${images.length + 3}`,
          title: `Dynamic Image ${images.length + 3}`,
          description: `Loaded on page ${page + 1}`
        },
        {
          src: `https://picsum.photos/300/${400 + Math.floor(Math.random() * 300)}?random=${Date.now()}`,
          alt: `Random image ${images.length + 1}`,
          title: `Dynamic Image ${images.length + 1}`,
          description: `Loaded on page ${page + 1}`
        },
        {
          src: `https://picsum.photos/300/${300 + Math.floor(Math.random() * 400)}?random=${Date.now() + 1}`,
          alt: `Random image ${images.length + 2}`,
          title: `Dynamic Image ${images.length + 2}`,
          description: `Loaded on page ${page + 1}`
        },
        {
          src: `https://picsum.photos/300/${350 + Math.floor(Math.random() * 350)}?random=${Date.now() + 2}`,
          alt: `Random image ${images.length + 3}`,
          title: `Dynamic Image ${images.length + 3}`,
          description: `Loaded on page ${page + 1}`
        },
        {
          src: `https://picsum.photos/300/${400 + Math.floor(Math.random() * 300)}?random=${Date.now()}`,
          alt: `Random image ${images.length + 1}`,
          title: `Dynamic Image ${images.length + 1}`,
          description: `Loaded on page ${page + 1}`
        },
        {
          src: `https://picsum.photos/300/${300 + Math.floor(Math.random() * 400)}?random=${Date.now() + 1}`,
          alt: `Random image ${images.length + 2}`,
          title: `Dynamic Image ${images.length + 2}`,
          description: `Loaded on page ${page + 1}`
        },
        {
          src: `https://picsum.photos/300/${350 + Math.floor(Math.random() * 350)}?random=${Date.now() + 2}`,
          alt: `Random image ${images.length + 3}`,
          title: `Dynamic Image ${images.length + 3}`,
          description: `Loaded on page ${page + 1}`
        }
      ];
      setImages(prevImages => [...prevImages, ...newImages]);
      setPage(prevPage => prevPage + 1);
      setIsLoading(false);
    }, 1000);
  },[images.length, page]);

useEffect(() => {
  console.log('Setting up scroll watcher...');
  
  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isLoading) {
        console.log('Sentinel visible! Loading more images...');
        loadMoreImages();
      }
    },
    { threshold: 0.1 } // Trigger when 10% of sentinel is visible
  );

  if (sentinelRef.current) {
    observer.observe(sentinelRef.current);
  }

  // Cleanup when component unmounts
  return () => observer.disconnect();
},[isLoading, loadMoreImages]);





  return (
    <div className="App">
      <Gallery
        images={images}
        onImageClick={(image: ImageData) => console.log('Cliked:', image.title)}
        onImageDownload={(image: ImageData) => console.log('Download:', image.title)}
      />
      <div ref={sentinelRef} id="scroll-sentinel" style={{ height: '20px', backgroundColor: 'transparent' }}>
      </div>
    </div>
  );
}

export default App;
