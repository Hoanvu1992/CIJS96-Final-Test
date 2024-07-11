import { Button, Input } from "antd";

const All = () => {
  return (
    <div>
      <div className="flex justify-evenly">
        <form action="">
          <Input className="w-2/3" placeholder="Add details" />
          <Button className="bg-blue-500 text-white">ADD</Button>
        </form>
      </div>
      <div className="my-3"></div>
    </div>
  );
};

export default All;
