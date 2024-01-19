import React from 'react'

const DashboardLayout = ({children, users, portfolio, notification, login}:
  {
    children: React.ReactNode,
    users: React.ReactNode,
    portfolio: React.ReactNode,
    notification: React.ReactNode,
    login: React.ReactNode
  }) => {

  const isLoggedIn = false;

  let content = <>{login}</>

  if (isLoggedIn) {
    content = <div>
    {children}

    {/* these could be components */}
    <div>Matrix</div>
    <div>notification</div>
    <div>portfolio</div>

    {/* you could achieve same thing with the parallel routes */}
    <div className='flex gap-5'>
      <div>{users}</div>
      <div>{notification}</div>
      <div>{portfolio}</div>
    </div>

  </div>
  }

  return (
    <>
    {content}
    </>
  )
}

export default DashboardLayout