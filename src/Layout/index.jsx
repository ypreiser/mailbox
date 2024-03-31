import { useEffect } from 'react';
import { Outlet, Route, Routes } from "react-router"
import MainSideBar from './MainSideBar';
import MailboxLayout from './MailboxLayot'
import { useNavigate } from "react-router-dom";
import Inbox from '../components/Inbox';

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Calendar() {
  return <h2>Calendar</h2>;
}

function View() {
  return <h2>View</h2>;
}

function Charts() {
  return <h2>Charts</h2>;
}

function Videos() {
  return <h2>Videos</h2>;
}

export default function Layout() {
  const nav = useNavigate()

  useEffect(() => {
    nav('/mailbox')
  }, [])


  return (
    <div style={{ display: 'flex' }}>
      <MainSideBar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="view" element={<View />} />
          <Route path="mailbox" element={<MailboxLayout />} >
            <Route path="inbox" element={<Inbox/>} />
            <Route path="sent" element={<>Sent</>} />
            <Route path="favorites" element={<>Favorites</>} />
            <Route path="drafts" element={<>Drafts</>} />
            <Route path="deleted" element={<>Deleted </>} />
          </Route>
          <Route path="/charts" element={<Charts />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </div >
  );
}
