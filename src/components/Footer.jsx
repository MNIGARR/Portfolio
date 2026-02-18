import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="w-full py-10 px-4 bg-card relative justify-center border-t border-border flex flex-wrap items-center space-y-4 ">
            <p className="text-sm text-foreground/80">
                &copy; {new Date().getFullYear()} Nigar.Mustafazada. All rights reserved.
            </p>

            <a href ="#home" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors absolute right-4 top-4">
                <ArrowUp/>
            </a>
            
        </footer>
    );
}