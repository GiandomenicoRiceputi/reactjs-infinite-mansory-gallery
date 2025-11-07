import React from 'react';
import { PhotoCard } from '../PhotoCard';
import './Gallery.css';

export interface ImageData {
    src: string;
    alt: string;
    title: string;
    description: string;
}

interface GalleryProps {
    images: ImageData[];
    isLoading?: boolean;
    onImageClick?: (image: ImageData) => void;
    onImageDownload?: (image: ImageData) => void
}

export const Gallery: React.FC<GalleryProps> = ({ images, isLoading = false, onImageClick, onImageDownload }) => {
    if (isLoading) {
        return <div>Loading...</div>;
    } else if (images.length === 0) {
        return <div>No Images..</div>;

    }
    return (

        <div className="gallery">
            {images.map((image, index) => (
                <PhotoCard
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    title={image.title}
                    description={image.description}
                    onOpenImage={() => onImageClick?.(image)}
                    onDownloadImage={() => onImageDownload?.(image)}
                />
            ))}
        </div>


    );
}