
import shirt from "../../assets/Icon1.svg";
import bag from "../../assets/Icon2.svg";
import magniglass from "../../assets/Icon3.svg";
import recycle from "../../assets/Icon4.svg";
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