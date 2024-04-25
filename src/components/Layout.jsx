import { Fragment } from 'react'
import Sidebar from './Sidebar/Sidebar'
import CTA from './CTA'

const Layout = ({children}) => {
  return (
    <Fragment>
      <Sidebar/>
      <CTA/>
      <div>
        {
          children
        }
      </div>
    </Fragment>
  )
}

export default Layout