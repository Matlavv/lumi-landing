import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-lumi-violet text-white hover:bg-[#4518a8]",
    secondary: "bg-white text-lumi-black hover:bg-zinc-100",
    outline: "border-2 border-zinc-200 text-lumi-black hover:border-lumi-violet dark:border-white/20 dark:text-white dark:hover:border-lumi-violet",
    ghost: "text-zinc-600 hover:text-lumi-violet hover:bg-lumi-violet/10 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/10",
    gradient: "bg-lumi-gradient text-white hover:shadow-lg hover:shadow-lumi-violet/25 hover:opacity-90",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
    xl: "h-16 px-10 text-xl",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
