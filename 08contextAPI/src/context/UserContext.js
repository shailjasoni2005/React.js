import React from "react";

const UserContext = React.createContext()

export default UserContext;

/* here we use create context method so that usercontent will be the context here.
   then we can export it normally like other components in react.
   We can then wrap multiple componenets inside this UserContext which then will be 
   a provider that means  all the components inside it will get access to thus global
   UserContext. 
   UserContext is much like a global variable.

   step2:- With this context we need to make a provider too. To provide data.
*/