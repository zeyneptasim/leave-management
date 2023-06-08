import UserMenu from '../components/UserMenu'
import UserListContainer from '../components/UserListContainer'
import LeaveChart from '../components/reservations/LeaveChart'

function UsersPage() {


  return (
    <div className="container userpage">
      <div className="row">
        <div className="col-md-4">
          <LeaveChart />
        </div>
        <div className="col-md-8">
          <UserListContainer />
        </div>
      </div>
    </div>
  )
}

export default UsersPage
