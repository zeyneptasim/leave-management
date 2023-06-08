
import DatePickerPage from '../components/HomepageCalendar'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import MyCalendar from '../components/HomepageCalendar';


function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="container pb-5">
      <div className="row justify-content-md-center homepage_row">
         <div className='col-md-8'>
            <h1>Добре дошли в платформата за запазване на отпуски на Ladigue Group</h1>
            <p>Ако искате да запазите своя отпуск моля натиснете бутона</p>
            <Link to="/booking">
              <button className='mx-1 fw-bold'>Запази отпуск</button>
            </Link>
         </div>
      </div>
    </div>
  )
}

export default HomePage
