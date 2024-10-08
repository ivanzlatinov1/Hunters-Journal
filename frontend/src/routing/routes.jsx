import App from '@/App';
import HomePage from '@/pages/home/Home';
import humans from './humans';
import monsters from './monsters';
import Fight from '../pages/fight/Fight';
import Http404 from '../errors/Http404'; 
import PrivacyPolicy from '../pages/privacy-policy/Privacy';

export default [{
    path: '/',
    element: <App />,
    children: [
        {
            path: '/',
            element: <HomePage />
        },
        ...humans,
        ...monsters,
        {
            path:'/fight',
            element: <Fight />
        },
        {
            path:'/privacy-policy',
            element: <PrivacyPolicy />
        },
        {
            path:'*',
            element: <Http404 />
        }
    ]
}];
