import "./App.css";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <div className="fv">
        <div className="container">
          <div className="content">
            <div className="header">
              <h1 className="main_ttl">白金瑪麗</h1>
            </div>
            <div className="store">
              <h2 className="sub_ttl">已蒐集到的店家清單​</h2>
              <ul className="list">
                <li>10/12 Bar Mood</li>
                <li>11/29 To Infinity and Beyond</li>
              </ul>
            </div>
            <div className="action">
              <a className="action_btn" href="#" target="_blank">
                <span>點這集點</span>
              </a>
              <a className="action_btn" href="#" target="_blank">
                <span>
                  LINE POINTS
                  <br />
                  兌換
                </span>
              </a>
              <a className="action_btn" href="#" target="_blank">
                <span>活動店家</span>
              </a>
              <a className="action_btn" href="#" target="_blank">
                <span>已集點店家</span>
              </a>
            </div>
            <div className="warning"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
