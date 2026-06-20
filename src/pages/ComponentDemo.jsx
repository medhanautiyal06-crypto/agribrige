import { Button, Input, Loader } from "../components/ui";

export default function ComponentDemo() {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">
        UI Component Library
      </h1>

      <Button>
        Primary Button
      </Button>

      <div className="mt-5">
        <Input
          label="Email"
          placeholder="Enter Email"
        />
      </div>

      <div className="mt-5">
        <Loader />
      </div>

    </div>
  );
}