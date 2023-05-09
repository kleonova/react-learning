import { ThemeProvider } from "./contexts/ThemeContext";
import ContainerLesson4 from "./lesson4";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <ThemeProvider>
            <ContainerLesson4 />
        </ThemeProvider>
    );
};

export default App;