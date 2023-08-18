import Slider from "react-slick";
import { useRef} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../Card/Card';
import "./carousel.css"

export default function Carousel({data}) {
    const slider = useRef();
    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };

    const settings = {
        slidesToScroll: 2,
        speed: 1000,
        autoplaySpeed: 6000,
        cssEase: "linear",
        dots: false,
        infinite: true,
        slidesToShow: 4,
        initialSlide: 5,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="multi-carousel container-xl mt-4">
            <button onClick={previous} className="btn-prev"><i className="fa-solid fa-angle-left"></i></button>
            <Slider ref={slider} {...settings}>
                {
                    data?.map((product) => <div key={product.id}><Card product={product}/></div>)
                }
            </Slider>
            <button onClick={next} className="btn-next"><i className="fa-solid fa-angle-right"></i></button>
        </div>
    );
}
