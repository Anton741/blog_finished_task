import {Link} from 'react-router-dom'
import {useParams} from "react-router"
import AddArticleForm from '../../form/addArticleForm'
import AdminArticlesTable from '../../adminArticlesTable';
import adminPhoto from '../../../assets/aboutPage/Picture.png'

const AdminPage = () => {
  const parametr = useParams()
  const { articles }= parametr
  console.log(articles);
  return (
    <div className="admin__page">
      <div className="admin__row">
        <div className="admin__column admin__column-small">
          <div className="admin__menu">
            <ul className="admin-menu__list">
              <Link to="/admin/profile">
                <li className="admin-menu__item admin-menu__item-profile">
                  Profile
                </li>
              </Link>
              <Link to="/admin/articles">
                <li className="admin-menu__item admin-menu__item-articles">
                  All articles
                </li>
              </Link>
              <Link to="/admin/add">
                <li className="admin-menu__item admin-menu__item-write">
                  Add new article
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="admin__column admin__column-big">
          <div className="admin__header">
            <div className="admin__photo">
              <img src={adminPhoto}></img>
            </div>
          </div>
          <div className="admin__main">
            <div className="admin__title">title</div>
            <div className="admin__block">
              {articles === "articles" ? <AdminArticlesTable /> : (articles === "add" ? <AddArticleForm/> : null)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AdminPage;