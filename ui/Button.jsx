import PropTypes from "prop-types";
import classNames from "classnames";

// variants: 'primary', 'secondary', 'success'
// sizes: 'sm', 'md', 'lg'
export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) {
  // Size classes with responsive typography
  const sizeClasses = {
    sm: "px-4 py-1.5 text-base font-medium", // 16px
    md: "px-6 py-2 text-md font-medium",     // 18px
    lg: "px-8 py-3 text-xl font-semibold",   // 36px
  };

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    info: "bg-blue-500 text-white hover:bg-blue-600",
    danger: "bg-danger text-white hover:bg-danger-dark",
    secondary: "bg-white text-primary border border-primary hover:bg-primary-light/10",
    success: "bg-success text-white hover:bg-success/90",
  };

  const baseClasses =
    "rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button
      className={classNames(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "success"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
