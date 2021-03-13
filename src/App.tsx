import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import { DefaultToast, ToastProvider } from 'react-toast-notifications';

import './styles/global.scss'

export function App() {
  return (
    <ToastProvider
    autoDismiss
    autoDismissTimeout={5000}
    components={{ Toast: DefaultToast }}
    placement="top-right"
  >
    <Header />
    <TaskList />
  </ToastProvider>
  )
}