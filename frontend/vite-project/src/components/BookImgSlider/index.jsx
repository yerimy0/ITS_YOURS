import React, { useState } from 'react';
import { SliderContainer, SlideImage, ArrowButton } from './BookImgSliderStyle';
function BookImgSlider({ images }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const numOfImages = images.length;

	const showSlideControls = numOfImages > 1;

	const prevSlide = () => {
		setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : numOfImages - 1));
	};

	const nextSlide = () => {
		setCurrentIndex(prevIndex => (prevIndex < numOfImages - 1 ? prevIndex + 1 : 0));
	};

	return (
		<SliderContainer>
			<SlideImage src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

			{showSlideControls && (
				<>
					<ArrowButton onClick={prevSlide}>&#10094;</ArrowButton>
					<ArrowButton onClick={nextSlide}>&#10095;</ArrowButton>
				</>
			)}
		</SliderContainer>
	);
}

export default BookImgSlider;
