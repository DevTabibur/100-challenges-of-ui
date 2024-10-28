import { Dribble, Facebook, Instagram, LinkedIn, X } from '@/assets/svg';


// Define an interface for the icon data
interface SocialIcon {
    name: string;
    IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

const icons: SocialIcon[] = [
    { name: 'LinkedIn', IconComponent: LinkedIn },
    { name: 'Facebook', IconComponent: Facebook },
    { name: 'X', IconComponent: X },
    { name: 'Dribble', IconComponent: Dribble },
    { name: 'Instagram', IconComponent: Instagram },
];

const SocialIcons = () => {
    return (
        <div className="flex justify-between space-x-4">
            {icons.map(({ name, IconComponent }) => (
                <div key={name} className='w-10 h-10 p-2 rounded-full flex items-center justify-center relative'>
                    <IconComponent className="rounded-full" width={24} height={24} />
                </div>
            ))}
        </div>

    );
};

export default SocialIcons;
