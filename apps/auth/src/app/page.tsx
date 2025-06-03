"use client";

import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@repo/ui-components";

export default function Home() {
  return (
    <>
      <div className="text-7xl text-red-500">Whereas disregard and contempt for human rights have resulted</div>
      Switch theme <Button>Test</Button>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl">Card Content</div>
          <p className="test">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </CardContent>
        <CardFooter>
          <Button>Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
        </CardFooter>
      </Card>
    </>
  );
}
