import React from 'react'
import SidebarState from './siderbar/SidebarState'

export default function State({children}) {
  return (
    <SidebarState>
        {children}
    </SidebarState>
  )
}
