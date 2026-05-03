import {useState, useEffect, createContext, useContext} from 'react';
//use template if you decide to store data
{/*type Story = {
    id: string;
    name: string;
    cover: string;
    story: string[];
    brief?: string;
    wordct?: number;
};*/}

type ApiContextType = {
    shoppingCart: boolean;
    setShoppingCart: React.Dispatch<React.SetStateAction<boolean>>;
    dropShop: boolean;
    setDropShop: React.Dispatch<React.SetStateAction<boolean>>;
    dropSociety: boolean;
    setDropSociety: React.Dispatch<React.SetStateAction<boolean>>;

    dropCat: boolean;
    setDropCat: React.Dispatch<React.SetStateAction<boolean>>;
    dropPrice: boolean;
    setDropPrice: React.Dispatch<React.SetStateAction<boolean>>;
    dropSize: boolean;
    setDropSize: React.Dispatch<React.SetStateAction<boolean>>;
    dropStone: boolean;
    setDropStone: React.Dispatch<React.SetStateAction<boolean>>;
    dropZodiac: boolean;
    setDropZodiac: React.Dispatch<React.SetStateAction<boolean>>;
};

export function toTop(){
    window.scrollTo(0,0);
};
const ApiContext = createContext<ApiContextType | null>(null);

export function ApiProvider({ children }: { children: React.ReactNode }){
    
    //create all useState and functions here to be exported via API Provider 
    //const [feelGood, setFeelGood] = useState<Story[]>([]);
    //const [level, setLevel] = useState<number>(2500);
    const [shoppingCart, setShoppingCart] = useState<boolean>(false);
    const [dropShop, setDropShop] = useState<boolean>(false);
    const [dropSociety, setDropSociety] = useState<boolean>(false);
    const [dropCat, setDropCat] = useState<boolean>(false);
    const [dropPrice, setDropPrice] = useState<boolean>(false);
    const [dropSize, setDropSize] = useState<boolean>(false);
    const [dropStone, setDropStone] = useState<boolean>(false);
    const [dropZodiac, setDropZodiac] = useState<boolean>(false);

    {useEffect(() => {
        async function getData(){
            
        }
        getData()
    },[])}

    return(
        <ApiContext.Provider
            value={{ shoppingCart, setShoppingCart, dropShop, setDropShop, dropSociety, setDropSociety, dropCat, setDropCat, dropPrice, setDropPrice, dropSize, setDropSize, dropStone, setDropStone, dropZodiac, setDropZodiac}}// pass all useState in here so outside components can use
        >
            {children}
        </ApiContext.Provider>
    )
}

export function useApi(){
    const context = useContext(ApiContext);

    if (!context) {
        throw new Error("useApi must be used within ApiProvider");
    }

    return context;
}