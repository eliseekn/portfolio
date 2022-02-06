import { Dispatch, SetStateAction } from "react"

export interface IProps {
    activePage: string;
    setActivePage: Dispatch<SetStateAction<string>>
}
