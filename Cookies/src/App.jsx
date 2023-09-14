import { useRef } from "react";
import axios from "axios";

export function App() {
    const cn = useRef(null);
    const cv = useRef(null);

    const send = (event) => {
        event.preventDefault(); // Corrected line
        const obj = { cname: cn.current.value, cvalue: cv.current.value }; // Corrected object key
        axios.post('http://localhost:3000/users', obj)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <form>
                <input type="text" placeholder="enter cookie name" ref={cn} />
                <br />
                <input type="text" placeholder="enter cookie value" ref={cv} />
                <br />
                <input type="button" value="clickHere" onClick={send} />
            </form>
        </>
    );
}

export default App;