import "./styles.css";
import Blog from "./classComponents/Blog";
import Blog2 from "./classComponents2/Blog";

export default function App() {
  return (
    <div className="App">
      <h1>砂場</h1>
      <h2>テスト</h2>
      <Blog />
      <div>--------------</div>
      <Blog2 />
    </div>
  );
}
