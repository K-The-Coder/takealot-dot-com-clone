import { useEffect, useState } from "react";
import { imageSlideShowList } from "../data/lists";

export default function ImageSlideShow({
  slides = imageSlideShowList,
  interval = 3000,
}) {
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const totalSlides = slides.length;

  const plusSides = (n: number) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;

      if (newIndex > slides.length) {
        newIndex = 1;
      } else if (newIndex < 1) {
        newIndex = slides.length;
      }
      return newIndex;
    });
  };

  const currentSlide = (n: number) => setSlideIndex(n);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === totalSlides ? 1 : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(timeoutId);
  }, [totalSlides, interval]);

  return (
    <>
      <div className="slideshow-panel">
        {/* Images */}
        {slides.map((slide, index) => {
          const slideNumber = index + 1;
          const isActive = slideIndex === slideNumber;

          return (
            <div
              className={`my-slides fade ${isActive ? "active" : ""}`}
              key={slide.id}
              style={{ display: isActive ? "block" : "none" }}
            >
              <img src={slide.src} style={{ width: "100%" }} />
            </div>
          );
        })}

        {/* Next and Previous buttons */}
        <a className="prev" onClick={() => plusSides(-1)}>
          &#10094;{" "}
        </a>
        <a className="next" onClick={() => plusSides(1)}>
          &#10095;{" "}
        </a>

        {/* Dots/circles */}
        <div style={{ textAlign: "center" }}>
          {slides.map((_, index) => {
            const dotNumber = index + 1;
            const isActive = slideIndex === dotNumber;

            return (
              <span
                key={index}
                className={`dot ${isActive ? "active" : ""}`}
                onClick={() => currentSlide(dotNumber)}
              ></span>
            );
          })}
        </div>
      </div>
    </>
  );
}
