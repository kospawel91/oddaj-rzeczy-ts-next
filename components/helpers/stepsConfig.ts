
import shirt from "../../assets/Icon1.png";
import bag from "../../assets/Icon2.png";
import magniglass from "../../assets/Icon3.png";
import recycle from "../../assets/Icon4.png";
import {IFour} from "../../types"

const statisticsFourConfig: IFour[] = [
    {  img:shirt,
        header:"Wybierz rzeczy  ",
        text:"ubrania, zabawki, sprzęt i inne",
      
    },
     {  img: bag,
        header:"Spakuj je ",
        text:"skorzystaj z worków na śmieci",
      
    },
       {  img: magniglass,
        header:"Zdecyduj komu chcesz pomuc",
        text:"wybierz zaufane miejsce",
      
    },
     {  img: recycle,
        header:"Zamów kuriera ",
        text:"kurier przyjedzie w dogodnym terminie",
      
     }
];


export default statisticsFourConfig;