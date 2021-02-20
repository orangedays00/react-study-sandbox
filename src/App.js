import "./styles.css";
import Blog from "./classComponents/Blog";
import Blog2 from "./classComponents2/Blog";
import Blog3 from "./classComponents3/Blog";
import Blog4 from "./classComponents4/Blog";

export default function App() {
  return (
    <div className="App">
      <h1>砂場</h1>
      <Blog />
      <div>--------------</div>
      <Blog2 />
      <div>--------------</div>
      <Blog3 />
      <div>--------------</div>
      <Blog4 />
    </div>
  );
}
