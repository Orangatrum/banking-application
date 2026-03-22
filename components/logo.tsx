import { Leaf } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ size = "md", showText = true }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-base",
    md: "w-10 h-10 text-lg",
    lg: "w-14 h-14 text-2xl"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-7 h-7"
  };

  const textSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center text-white font-bold relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2)_0%,transparent_60%)]" />
        <Leaf className={`${iconSizes[size]} relative z-10`} />
      </div>
      {showText && (
        <div>
          <h1 className={`font-bold ${textSizes[size]} text-gray-900`}>Arbor Financial</h1>
          {size !== "sm" && <p className="text-xs text-gray-500">Grow Your Wealth</p>}
        </div>
      )}
    </div>
  );
}