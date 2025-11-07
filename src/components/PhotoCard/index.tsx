import React from 'react';
import './PhotoCard.css'

interface PhotoCardProps {
    src: string;
    alt: string;
    title: string;
    description: string;
    onOpenImage: () => void;
    onDownloadImage?: () => void;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ src, alt, title, description, onOpenImage, onDownloadImage }) => {
    // Handler for keyboard events on the card ( for accessibility )
    const handleKeyDown = (event: React.KeyboardEvent) => {
        // Activate on Enter or Space, mimicking a button's behavior
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent scroll on spacebar
            onOpenImage();
        }
    }

    return (
        <article
            className='photo-card'
            tabIndex={0}
            role='button'
            aria-label={`View details for ${title}`}
            onClick={onOpenImage}
            onKeyDown={handleKeyDown}
        >
            <figure>
                <img src={src} alt={alt} className="photo-card__image" loading="lazy" />
                <figcaption className="photo-card__content">
                    <h2 className="photo-card__title">{title}</h2>
                    <p className="photo-card__description">{description}</p>
                </figcaption>
            </figure>
            {onDownloadImage && (
                <button 
                    className="photo-card__download"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDownloadImage();
                    }}
                    aria-label={`Download image: ${title}`}
                >
                    Download
                </button>
            )}
        </article>
    )
}