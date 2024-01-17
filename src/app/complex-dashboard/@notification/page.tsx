import Link from 'next/link'
import React from 'react'

const Notification = () => {
  return (
    <div>
      <div>
        Notification
      </div>
      <Link href={'/complex-dashboard/archived'}>Archived Notifications</Link>
    </div>
  )
}

export default Notification
