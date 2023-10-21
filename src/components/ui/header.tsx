import { MenuIcon, Sheet, ShoppingCart } from "lucide-react";
import { Button } from "./button";
import {Card} from "./card";
import { SheetContent, SheetTrigger } from "./sheet";

const Header = () => {
    return (
    <Card className="flex justify-between p-[1.875rem]">

        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                    <MenuIcon/>
                </Button>
            </SheetTrigger>

            <SheetContent side="left">
                <h1>Menu</h1>
            </SheetContent>
        </Sheet>

        <h1 className="font-semibold text-lg">
            <span className="text-primary">FSW</span> Store</h1>
        <Button size="icon" variant="outline">
            <ShoppingCart />
        </Button>

    </Card>
);};

export default Header;