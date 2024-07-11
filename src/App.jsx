import { Tabs } from "antd";
import "./App.css";
import TabPane from "antd/es/tabs/TabPane";
import CompletedTodos from "./Components/Tabs/CompletedTodos";
import Active from "./Components/Tabs/Active";

function App() {
  return (
    <div className="h-[500px] w-[500px] border-1 rounded-lg bg-slate-200 relative top-32 left-[35%] p-5">
      <h1 className="text-4xl font-bold text-center">#TODO</h1>
      <div>
        <Tabs defaultActiveKey="1" centered size="large">
          <TabPane tab="All" key="1">
            <Active />
          </TabPane>
          <TabPane tab="Active" key="2">
            <Active />
          </TabPane>
          <TabPane tab="Completed" key="3">
            <CompletedTodos />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
