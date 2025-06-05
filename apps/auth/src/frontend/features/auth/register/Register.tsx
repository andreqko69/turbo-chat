import { setTimeout } from 'node:timers';

import React from 'react';
import { Button, Card, CardContent } from '@repo/ui-components';

const Register = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log('Server');
      resolve(true);
    }, 5000),
  );

  return (
    <Card>
      <CardContent>
        <Button>Test</Button>
      </CardContent>
    </Card>
  );
};

export default Register;
