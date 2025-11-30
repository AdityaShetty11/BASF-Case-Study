import React, { ReactNode } from "react";
import { isAuthenticated } from "../utils/auth";
import Link from "antd/es/typography/Link";
import { Navigate } from "react-router-dom";

interface PrivateRoutesProps {
  children: ReactNode;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ children }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/" replace />;
    }
    return <>{children}</>;
};

export default PrivateRoutes;