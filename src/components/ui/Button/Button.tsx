"use client"
import React from "react";

interface ButtonProps {
    children: React.ReactNode | string
    icon?: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    icon,
    type = "button",
    className = "",
    isDisabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={` ${isDisabled && "cursor-not-allowed"}  ${className}`}
        >
            {icon && <span>{icon}</span>}
            <span>{children}</span>
        </button>
    );
};

export default Button;
