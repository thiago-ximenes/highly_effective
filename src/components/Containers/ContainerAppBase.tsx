import {PropsWithChildren} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function ContainerAppBase({children}: PropsWithChildren) {
    return (<Grid2 container padding="24px">{children}</Grid2>);
}