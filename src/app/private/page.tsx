import React from 'react';

import checkAuth from '@/utils/checkAuth';

export default async function PrivatePage() {
  const userData = await checkAuth();

  return (<p>Hello {userData.user.email}</p>);
}