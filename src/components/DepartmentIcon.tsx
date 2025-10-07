import { 
  Code, 
  Brain, 
  Briefcase, 
  GraduationCap, 
  Settings, 
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
    'Code': <Code className={className} />,
    'Brain': <Brain className={className} />,
    'Briefcase': <Briefcase className={className} />,
    'GraduationCap': <GraduationCap className={className} />,
    'Settings': <Settings className={className} />,
    'Heart': <Heart className={className} />,
    'Palette': <Palette className={className} />,
    'Ruler': <Ruler className={className} />,
  };

  return <>{icons[iconName] || <Code className={className} />}</>;
};
