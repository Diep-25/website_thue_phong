/* eslint-disable react/prop-types */
import useCarousel from "embla-carousel-react";
import { map } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../../utils/helpers";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Autoplay from "embla-carousel-autoplay";

// interface ICarouselWithThumbsProps {
//   items: string[];
//   slidesGap?: number;
//   thumbsGap?: number;
//   thumbsPerView?: number;
//   gutter?: number;
//   classNames?: {
//     wrapper?: string,
//   };
//   thumbIndex?: number;
// }

export default function CarouselWithThumb(props) {
  const {
    items,
    slidesGap = 12,
    thumbsGap = 12,
    thumbsPerView = 4,
    gutter = 16,
    thumbIndex = 0,
    classNames,
  } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useCarousel(
    {
      containScroll: "trimSnaps",
      loop: true,
    },
    [Autoplay({ playOnInit: true, delay: 1500 })]
  );
  const [emblaThumbsRef, emblaThumbsApi] = useCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
    loop: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const handlePrevious = () => {
    emblaMainApi?.scrollPrev();
  };
  const handleNext = () => {
    emblaMainApi?.scrollNext();
  };

  useEffect(() => {
    if (!emblaMainApi || !emblaThumbsApi) return () => {};
    emblaMainApi.scrollTo(thumbIndex);
  }, [emblaMainApi, emblaThumbsApi, thumbIndex]);

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;

    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className={cn("w-full relative", classNames?.wrapper)}>
      {/* viewport */}
      <button
        aria-label="go to previous slide"
        onClick={handlePrevious}
        className="h-8 w-8 rounded-full flex items-center justify-center bg-white bg-opacity-40  absolute top-[40%] -translate-y-1/2 z-10 shadow-md left-4 text-black"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <button
        aria-label="go to next slide"
        onClick={handleNext}
        className="h-8 w-8 rounded-full flex items-center justify-center bg-white bg-opacity-40 absolute top-[40%] -translate-y-1/2 z-10 shadow-md right-4 text-black"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
      <div data-name="viewport" className="overflow-hidden" ref={emblaMainRef}>
        <div
          data-name="container"
          className="flex touch-pan-y touch-pinch-zoom"
          style={{
            marginLeft: `-${slidesGap}px`,
          }}
        >
          {map(items, (item, index) => (
            <div
              data-name="slide"
              key={index}
              className="w-full flex-shrink-0 flex-grow-0"
              style={{
                paddingLeft: `${slidesGap}px`,
              }}
            >
              <div className="flex-1 relative">
                <img
                  className="w-full rounded-lg"
                  src={`http://localhost:3000/${item}`}
                  alt="Main Classroom"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* end viewport */}

      {/* thumbs */}
      <div
        data-name="thumbs"
        className="relative group"
        style={{
          marginTop: `${gutter}px`,
        }}
      >
        {/* <button
          aria-label="go to previous slide"
          onClick={handlePrevious}
          className="h-8 w-8 rounded-full flex items-center justify-center bg-white bg-opacity-40 absolute top-[40%] -translate-y-1/2 z-10 shadow-md left-4 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          aria-label="go to next slide"
          onClick={handleNext}
          className="h-8 w-8 rounded-full flex items-center justify-center bg-white bg-opacity-40 absolute top-[40%] -translate-y-1/2 z-10 shadow-md right-4 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button> */}
        <div
          data-name="thumbs-viewport"
          className="overflow-hidden"
          style={{
            marginLeft: `-${thumbsGap}px`,
          }}
          ref={emblaThumbsRef}
        >
          <div className="flex touch-pan-y touch-pinch-zoom">
            {map(items, (item, index) => (
              <div
                key={index}
                style={{
                  paddingLeft: `${thumbsGap}px`,
                  width: `calc(100% / ${thumbsPerView})`,
                }}
                aria-selected={index === selectedIndex}
                className="flex-shrink-0 flex-grow-0"
              >
                <button
                  onClick={() => onThumbClick(index)}
                  type="button"
                  className="relative aspect-square w-full overflow-hidden rounded-md"
                >
                  <span
                    aria-selected={index === selectedIndex}
                    className="absolute left-0 top-0 z-50 block size-full rounded-md border-2 border-primary opacity-0 transition-all duration-300 aria-selected:opacity-100"
                  />
                  <img
                    src={`http://localhost:3000/${item}`}
                    alt={item}
                    className="absolute inset-0 size-full object-cover"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end thumbs */}
    </div>
  );
}
