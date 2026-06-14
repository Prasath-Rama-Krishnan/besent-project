import { useRef } from "react";

function Uncontrolled() {
    const userText = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const value = userText.current ? userText.current.value : "";
        alert(value);
    };

    return (
        <>
            <h1>Uncontrolled Component</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={userText} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Uncontrolled;