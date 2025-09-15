import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const premiumInputVariants = cva(
  "input-premium w-full",
  {
    variants: {
      variant: {
        default: "",
        floating: "pt-6 pb-2",
        glassmorphism: "backdrop-blur-md bg-white/5 border-white/20",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        default: "h-9 px-3",
        lg: "h-10 px-4",
        xl: "h-11 px-5",
      },
      state: {
        default: "",
        success: "border-green-500/60 focus:border-green-500",
        error: "border-[#7c121b]/60 focus:border-[#7c121b]",
        warning: "border-yellow-500/60 focus:border-yellow-500",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      state: "default",
    },
  }
);

export interface PremiumInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof premiumInputVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  success?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}

const PremiumInput = React.forwardRef<HTMLInputElement, PremiumInputProps>(
  ({ 
    className, 
    variant, 
    size, 
    state,
    type = "text",
    label,
    helperText,
    error,
    success,
    leftIcon,
    rightIcon,
    loading = false,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);
    
    const currentState = error ? "error" : success ? "success" : state;
    
    React.useEffect(() => {
      setHasValue(!!props.value || !!props.defaultValue);
    }, [props.value, props.defaultValue]);
    
    return (
      <div className="relative w-full">
        {/* Label for non-floating variant */}
        {label && variant !== "floating" && (
          <label className="block text-sm font-medium text-foreground mb-2">
            {label}
          </label>
        )}
        
        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground z-10">
              {leftIcon}
            </div>
          )}
          
          {/* Input Field */}
          <input
            type={type}
            className={cn(
              premiumInputVariants({ variant, size, state: currentState }),
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              loading && "pr-10",
              className
            )}
            ref={ref}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            onChange={(e) => {
              setHasValue(!!e.target.value);
              props.onChange?.(e);
            }}
            {...props}
          />
          
          {/* Floating Label */}
          {label && variant === "floating" && (
            <label
              className={cn(
                "absolute left-3 transition-all duration-200 pointer-events-none",
                "text-muted-foreground",
                isFocused || hasValue
                  ? "top-2 text-xs font-medium"
                  : "top-1/2 -translate-y-1/2 text-base"
              )}
            >
              {label}
            </label>
          )}
          
          {/* Right Icon or Loading */}
          {(rightIcon || loading) && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {loading ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                rightIcon
              )}
            </div>
          )}
        </div>
        
        {/* Helper Text, Error or Success Message */}
        {(helperText || error || success) && (
          <div className="mt-2 text-sm">
            {error && (
              <p className="text-[#7c121b] flex items-center gap-1">
                <span className="w-4 h-4 text-[#7c121b]">⚠</span>
                {error}
              </p>
            )}
            {success && !error && (
              <p className="text-green-400 flex items-center gap-1">
                <span className="w-4 h-4 text-green-400">✓</span>
                {success}
              </p>
            )}
            {helperText && !error && !success && (
              <p className="text-muted-foreground">{helperText}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

PremiumInput.displayName = "PremiumInput";

export { PremiumInput, premiumInputVariants };
