"use client";

import { use } from "react";


type Params = Promise<{
  testId: string;
}>;


export default function Page(props: { params: Params; }) {
  const { testId } = use(props.params);


  const handleSubmit = async () => {
    const response = await fetch('/api/test/1234', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'John Doe', email: 'john.doe@example.com' })
    });
    const data = await response.json();

    console.log("response data:", data);
  };



  return (
    <div>
      다이나믹 라우트 페이지: {testId}
      <button type="submit" onClick={handleSubmit}>전송</button>
    </div>
  );
}