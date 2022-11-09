import { Statue } from "./statue";
import { Artwork } from "./artwork";

let lista : Artwork[];



document.addEventListener('DOMContentLoaded', () => {



      document.getElementById('gomb')?.addEventListener('click', () =>{

        (document.getElementById('nevhiba') as HTMLLabelElement).textContent = "";
        (document.getElementById('evhiba') as HTMLLabelElement).textContent = "";
        (document.getElementById('arhiba') as HTMLLabelElement).textContent = "";
        (document.getElementById('magassaghiba') as HTMLLabelElement).textContent = "";





        let nevellenorzo =  /^[A-Za-z','' ']+$/ ;
        let nev : string= (document.getElementById('nev') as HTMLInputElement)?.value;

        let evellenorzo = /^([1-9]|[0-9][0-9][0-9]|2022)$/;
        let ev : string= (document.getElementById('ev') as HTMLInputElement)?.value;

        let arellenorzo = /^[1-9]{1}[0-9]*$/;
        let ar : number = parseInt((document.getElementById('ar') as HTMLInputElement)?.value);

        let magassagellenorzo = /^[1-9]{1}[0-9]+$/;
        let magassag : number = parseInt((document.getElementById('magassag') as HTMLInputElement)?.value);



        if(!nevellenorzo.test(nev))
        {

            (document.getElementById('nevhiba') as HTMLLabelElement).textContent = "A név mező helytelen"

        }
        else if (!evellenorzo.test(ev))
        {

            (document.getElementById('evhiba') as HTMLLabelElement).textContent = "Az év mező helytelen"

        }
        else if (!arellenorzo.test(ar.toString()))
        {

            (document.getElementById('arhiba') as HTMLLabelElement).textContent = "Az ár mező helytelen"

        }
        else if (!magassagellenorzo.test(magassag.toString()))
        {

            (document.getElementById('magassaghiba') as HTMLLabelElement).textContent = "A magasság mező helytelen"


        }









      });














});