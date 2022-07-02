import { Error, MainContent, MainUser } from '../page'
import { Routes, Route } from 'react-router-dom'

export function RoutesFunch() {
  return(
    <Routes>
      <Route path='/' element={<MainUser />} />
      <Route path='/single' element={<MainContent />} />
      <Route path='/*' element={<Error />} />
    </Routes>
  )
}
