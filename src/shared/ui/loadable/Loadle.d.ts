import React from "react";
type IProps = {
    factory: () => Promise<{
        default: React.ComponentType;
    }>;
};
declare const Loadle: React.FC<IProps>;
export default Loadle;
