// High order function 

const conditionalInvocation = (condition, funIfTrue, funcIfFalse) => condition ? funIfTrue() : funcIfFalse();

/* -- Boite de nuit  -- */

// Pour entrer dans la boite > 18 ans 

const entrer = () => console.log("Bienvenue au Macumba");

const seFaireJetter = () => console.log("Bouge de là marmot");

conditionalInvocation(true, entrer, seFaireJetter)
conditionalInvocation(false, entrer, seFaireJetter)


const userLog = userName => message => console.log(`${userName} =>  ${message}`);

const log = userLog('Lowic');

log("attempt to connect to a not secure website");

/* HOC : Higher order component w/ React */

//withRouter(<Home/>);
//withCredentials(<Home/>);



