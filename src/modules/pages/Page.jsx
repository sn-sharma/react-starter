import logo from "../../logo.svg";

const Page = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                Page {props.pageNumber}
            </header>
        </div>
    );
};

export default Page;
