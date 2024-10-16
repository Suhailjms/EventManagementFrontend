import '../../assets/css/dashboard.css';
import PieChart from './PieChart';
const Dashboard = () => {
  return (
    <div className='outer_container'>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="stats">
          <div className="  stat">
            <h2>Current Users</h2>
            <p>100</p>
          </div>
          <div className="stat">
            <h2>Orders this week</h2>
            <p>50</p>
          </div>
          <div className="stat">
            <h2>Total revenue</h2>
            <p>50000</p>
          </div>
        </div>
        <div className="pie">
            <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;