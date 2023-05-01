import image from "../../assets/images/winter_is_coming.jpg";

function ImagePlaceholder({type}) {
    const [width, height] = type === "thumbnail" ? [350, 250] : [600, 400];

    return <img src={image} alt="placeholder" width={width} height={height} />;
}

export default ImagePlaceholder;