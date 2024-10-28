"use client"
import React from "react";

interface ButtonProps {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    classNames?: string;
    isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    icon,
    type = "button",
    classNames = "",
    isDisabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={` ${isDisabled && "cursor-not-allowed"}  ${classNames}`}
        >
            {icon && <span>{icon}</span>}
            <span>{label}</span>
        </button>
    );
};

export default Button;
