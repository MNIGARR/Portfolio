import {clsx} from 'clsx'
import { twMerge } from 'tailwind-merge'
// classname
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}