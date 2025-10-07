import { 
  Laptop, 
  Brain, 
  Briefcase, 
  GraduationCap, 
  Cog, 
  Heart, 
  Palette, 
  Ruler 
} from 'lucide-react';

interface DepartmentIconProps {
  iconName: string;
  className?: string;
}

export const DepartmentIcon = ({ iconName, className = "h-6 w-6" }: DepartmentIconProps) => {
  const icons: Record<string, React.ReactNode> = {
    'Laptop': <Laptop className={className} />,
    'Brain': <Brain className={className} />,
    'Briefcase': <Briefcase className={className} />,
    'GraduationCap': <GraduationCap className={className} />,
    'Cog': <Cog className={className} />,
    'Heart': <Heart className={className} />,
    'Palette': <Palette className={className} />,
    'Ruler': <Ruler className={className} />,
  };

  return <>{icons[iconName] || <Laptop className={className} />}</>;
};
