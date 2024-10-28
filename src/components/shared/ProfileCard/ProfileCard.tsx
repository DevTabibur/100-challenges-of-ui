import SocialIcons from "@/components/SocialIcons/SocialIcons"
import { Button } from "@/components/ui"


// FOLLOW ==>  https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F1i2l3ejccaxnaf3ybrt2.png

const ProfileCard = () => {
    return (
        <>
            <div className="max-w-96 bg-white p-6 rounded-3xl flex flex-col items-center justify-center">
                <div className="w-24 h-24">
                    <img className="rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

                </div>
                <div className="py-6">
                    <h2>Tabibur Rahman</h2>
                    <p>@devTabibur</p>
                </div>
                <SocialIcons />
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fugit aliquid! Natus dolor placeat nihil reprehenderit inventore ad odio molestias.</p>
                </div>
                <div className="space-x-10 py-4">
                    <Button classNames="bg-[#e03f8b] px-6 py-2 rounded-full text-white font-bold">Follow</Button>
                    <Button classNames="border border-gray-200 px-6 py-2 rounded-full text-black font-bold">Message</Button>
                </div>
            </div>

        </>
    )
}

export default ProfileCard