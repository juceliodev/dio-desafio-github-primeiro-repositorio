import React, { useState }from "react";
import useGitHub from "../../hooks/github-hooks";
import * as S from "./styled";


const Header = () =>{

    const { getUser } = useGitHub();

    const [userNameForSearch, setUserNameForSearch] = useState();

    const submitGetUser = () =>{
        if(!userNameForSearch) return;
         return getUser(userNameForSearch);
    }

    return (<header>
         <S.WrapperHeader>
            <input type ="text" placeholder="Digite o username para pesquisa ..."
            onChange={(event) => setUserNameForSearch(event.target.value)} />
            <button type = "submit" onClick={submitGetUser}>
                <span>Buscar</span>
            </button>
         </S.WrapperHeader>
    </header>
    );
};
export default Header;