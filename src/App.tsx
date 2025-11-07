import React, { useState } from 'react';
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

  const loadMoreImages = () => {
    console.log('Loading more images...');
  };



  return (
    <div className="App">
      <Gallery
        images={images}
        onImageClick={(image: ImageData) => console.log('Cliked:', image.title)}
        onImageDownload={(image: ImageData) => console.log('Download:', image.title)}
      />

<div style={{ textAlign: 'center', padding: '2rem'}}>
  <button
  onClick={loadMoreImages}
  disabled={isLoading}
  style={{
    padding: '1rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#007acc',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }}>
    {isLoading ? 'Loading...' : 'Load More Images'}
  </button>
</div>
    </div>
  );
}

export default App;
