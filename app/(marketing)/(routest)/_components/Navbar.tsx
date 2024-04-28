import { Header } from "@/components/general/Header";
import { Logo } from "@/components/general/Logo";
import { ModeToggle } from "@/components/general/Mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
    return (  
        <Header>
            <Logo />
            <div className="space-x-4 md:w-auto flex items-center justify-between w-full">
                <ModeToggle />
                <Button size="default" variant="outline" className="py-0">
                    <Link href="/sign-in" >
                        Login
                    </Link>
                </Button>
                <Button size="default" className="py-0" >
                    <Link href="/sign-up">
                        Register MPortal
                    </Link>
                </Button>
            </div>
        </Header>
    );
}
 
export default Navbar;