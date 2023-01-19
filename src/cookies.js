import Cookies from "js-cookie";

const SetCookie = (cookiename,usrin)=>{
    Cookies.set(cookiename,usrin,{
        expires:1, //1 day
        secure:true,
        sameSite:'Strict',
        path:'/home'
    })
};

const   GetCookie = (cookiename)=>{
    return Cookies.get(cookiename);
};

const   RemoveCookie = (cookiename)=>{
    Cookies.remove(cookiename);
};

export {SetCookie,RemoveCookie,GetCookie}