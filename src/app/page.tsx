"use client"
import { Button } from "@/components/ui";


export default function Home() {
  return (
    <>
      <h1>This is Home page</h1>
      <Button
        label="Submit"
        onClick={() => console.log("Button clicked!")}
        classNames="bg-green-500 hover:bg-green-600"
        isDisabled={false}
      />

    </>
  );
}
