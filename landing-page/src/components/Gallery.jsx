import { GalleryCard, GalleryDivision } from "../sunny-styles";

import GalleryImg1 from "../images/desktop/image-gallery-milkbottles.jpg";
import GalleryImg2 from "../images/desktop/image-gallery-orange.jpg";
import GalleryImg3 from "../images/desktop/image-gallery-cone.jpg";
import GalleryImg4 from "../images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
    return (<GalleryDivision>
        <GalleryCard src={GalleryImg1} alt="GalleryImg1" />

        <GalleryCard src={GalleryImg2} alt="GalleryImg2" />

        <GalleryCard src={GalleryImg3} alt="GalleryImg3" />

        <GalleryCard src={GalleryImg4} alt="GalleryImg4" />
      </GalleryDivision>  );
}
 
export default Gallery;