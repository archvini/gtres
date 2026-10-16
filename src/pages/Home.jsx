import Greetings from "../components/Greetings";

const user = window.prompt("Qual o seu")

function Home() {
    return(
        <Greetings nome={user} />
    );
}
export default Home;