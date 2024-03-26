import styles from "../components/cssModule/SignIn.module.css";
import EnterField from "./EnterField";

const SignIn = () => {
    const objectInput = [
        {
            name: "Name",
            entering: "Enter Name"
        },
        {
            name: "Email",
            entering: "Enter email"
        },
        {
            name: "Password",
            entering: "Enter password"
        }
    ];

    return (
        <div className={styles.container}>
            <form>
                <h2>Register</h2>

                {objectInput.map((typePrint, index) => (
                    <EnterField key={index} typePrint={typePrint} />
                ))}
                <div className={styles.buttonContainer}>
                    <button className={styles.regBTN}>Register</button>
                    <button className={styles.logBTN}>Log in</button>
                </div>
                
            </form>


        </div>
    );
};

export default SignIn;
