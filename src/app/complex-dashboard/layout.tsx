import React from 'react'

const DashboardLayout = ({children, users, portfolio, notification}:
  {
    children: React.ReactNode,
    users: React.ReactNode,
    portfolio: React.ReactNode,
    notification: React.ReactNode,
  }) => {

  return (
    <div>
      {children}

      {/* these could be components */}
      <div>Matrix</div>
      <div>notification</div>
      <div>portfolio</div>

      {/* you could achieve same thing with the parallel routes */}
      <div>
        <div>{users}</div>
        <div>{notification}</div>
        <div>{portfolio}</div>
      </div>

    </div>
  )
}

export default DashboardLayout