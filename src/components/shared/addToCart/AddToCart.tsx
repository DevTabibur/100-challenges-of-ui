/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Image from 'next/image';
import Bag1 from '@/assets/images/bag_1.jpg';
import { Button } from '@/components/ui';

// FOLLOW ==> https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fw1kqd76btu12iao9phwd.png

// Array of image sources
const imageSources = [Bag1, Bag1, Bag1, Bag1]; // Use actual different images here

interface IChooseSize {
    id: string;
    label: string;
    onClick?: (label: string) => void;
}

const sizes: IChooseSize[] = [
    { id: '1', label: 'S' },
    { id: '2', label: 'M' },
    { id: '3', label: 'L' },
    { id: '4', label: 'XL' },
    { id: '5', label: 'XXL' },
    { id: '6', label: 'XXXL' },
];

const AddToCart = () => {
    const [selectedImage, setSelectedImage] = useState(Bag1); // Default selected image
    const [zoom, setZoom] = useState(1); // Default zoom level

    const handleImageClick = (image: any) => {
        setSelectedImage(image); // Update the selected image when a small image is clicked
    };

    const handleZoomIn = () => {
        setZoom((prevZoom) => Math.min(prevZoom + 0.2, 2)); // Zoom in, up to a max of 2x
    };

    const handleZoomOut = () => {
        setZoom((prevZoom) => Math.max(prevZoom - 0.2, 1)); // Zoom out, down to 1x
    };

    const handleSizeClick = (label: string) => {
        console.log('Size clicked:', label);
    };

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left side small images */}
                <div className="w-[100%] md:w-[50%] md:flex gap-4">
                    <div className="flex items-center justify-evenly md:flex-col md:items-start md:space-y-3">
                        {imageSources.map((image, index) => (
                            <div
                                key={index}
                                className={`bg-white p-2 rounded-md shadow-xl border-2 border-blue-300 cursor-pointer ${selectedImage === image ? 'border-blue-500' : ''
                                    }`}
                                onClick={() => handleImageClick(image)} // Set the selected image when clicked
                            >
                                <Image src={image} alt={`image_${index}`} width={30} height={30} />
                            </div>
                        ))}
                    </div>

                    {/* Main Image with zoom functionality */}
                    <div className="w-full bg-white p-8 rounded-md flex items-center justify-center relative">
                        <div style={{ transform: `scale(${zoom})`, transition: 'transform 0.3s ease' }}>
                            <Image src={selectedImage} alt="Main Image" width={300} height={300} />
                            <div className="flex justify-center space-x-4 mt-4">
                                <Button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleZoomIn}>
                                    +
                                </Button>
                                <Button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleZoomOut}>
                                    -
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Zoom in/out controls */}

                </div>

                {/* Right side product details */}
                <div className="w-[100%] md:w-[50%] space-y-9">
                    <div>
                        <h2 className="text-blue">Polo Bag</h2>
                        <h2 className="text-3xl text-black font-semibold">Custom Fit Polo Bag</h2>
                        <p className="text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, earum?</p>
                        <h1 className="text-3xl font-bold">$99.00</h1>
                    </div>

                    {/* Size selection */}
                    <h3 className="text-black font-semibold">Choose Size</h3>
                    <div className="flex items-center justify-evenly">
                        {sizes.map((size) => (
                            <Button
                                key={size.id}
                                className="bg-white px-3 py-1 rounded-md shadow-sm cursor-pointer"
                                onClick={() => handleSizeClick(size.label)}
                            >
                                {size.label}
                            </Button>
                        ))}
                    </div>

                    <Button className="text-white bg-blue-600 px-8 py-3 rounded-md shadow">Add To Cart</Button>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;
