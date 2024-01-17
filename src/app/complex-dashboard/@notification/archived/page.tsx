import Link from 'next/link'
import React from 'react'


const NotificationArchived = () => {
  return (
    <>
    <div>
      <div>Notification Archived</div>
      <Link href={'/complex-dashboard'}>Default Notification</Link>
    </div>
    </>
  )
}

export default NotificationArchived