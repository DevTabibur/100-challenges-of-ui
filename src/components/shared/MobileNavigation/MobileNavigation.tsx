import Image from "next/image";
import { FaEnvelope, FaHome, FaUser, FaUserFriends, FaUsers } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoNotificationsSharp, IoSettings } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

// FOLLOW ==> https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjb0o60u5asfzr1p38zrj.png

// Correcting the interface type declaration
interface IMenu {
    id: string;
    label: string;
    icon: React.ReactNode;
}

const menus: IMenu[] = [
    { id: "1", label: "Personal Data", icon: <FaUserFriends /> },
    { id: "2", label: "Messages", icon: <FaEnvelope /> },
    { id: "3", label: "Notifications", icon: <IoNotificationsSharp /> },
    { id: "4", label: "Location", icon: <FaLocationDot /> },
    { id: "5", label: "Community", icon: <FaUsers /> },
    { id: "6", label: "FAQ's", icon: <FaUserFriends /> },
    { id: "7", label: "Settings", icon: <IoSettings /> },
];

const MobileNavigation = () => {
    return (
        <div>
            <div className="max-w-md bg-white rounded-xl p-4">
                <div className="flex items-center ">
                    <div>
                        <Image
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="rounded-full"
                            width={80}
                            height={80}
                            alt="Profile Picture"
                        />
                    </div>
                    <div className="ms-6">
                        <h1>Lisa Richardson</h1>
                        <p>Environmental meteorologist</p>
                    </div>
                </div>
                <div className="border-b border-gray-300 py-2 mb-6"></div>
                <div className="space-y-4">

                    {menus.map((menu: IMenu, index: number) => (
                        <>
                            <div key={index} className={`flex items-center " ${index === menus.length - 2 ? 'border-t border-gray-300    pt-4' : ''}`}>
                                <div className="p-2 bg-gray-300 rounded text-2xl">
                                    {menu.icon}
                                </div>
                                <div className="flex flex-grow items-center justify-between">
                                    <h1 className="text-md font-bold ml-4">{menu.label}</h1>
                                    <MdOutlineKeyboardArrowRight />
                                </div>
                            </div>
                        </>
                    ))}
                </div>

                <div className="flex flex-row items-center justify-evenly py-6">
                    <div><FaHome /></div>
                    <div><TbBrandGoogleAnalytics /></div>
                    <div><FaEnvelope /></div>
                    <div><FaUser /></div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavigation;
