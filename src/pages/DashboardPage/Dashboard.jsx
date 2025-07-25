import { useState } from "react";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TotalCards from "../../components/TotalCards/TotalCards";
import Chart from "../../components/Chart/Chart";
import TransactionsTable from "../../components/TransactionsTable/TransactionsTable";
import ProfileSidebar from "../../components/Sidebar/ProfileSidebar";
import "./Dashboard.css";

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleProfileClick = () => setSidebarOpen(true);

  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <>
      <div className="dashboard-page">
        <Navbar onProfileClick={handleProfileClick} />
        {/* { Sidebar overlay } */}
        {sidebarOpen && (
          <>
            <div
              className="sidebar-overlay"
              onClick={handleSidebarClose}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 99,
              }}
            ></div>
            <div
              style={{
                position: "fixed",
                right: 0,
                zIndex: 100,
                height: "100vh",
              }}
            >
              <ProfileSidebar />
            </div>
          </>
        )}
        <main className="dashboard-container">
          <div className="dashboard-header">
            <h1 className="dashboard-title">Dashboard</h1>
            <p clasName="dashboard-subtitle">
              Your financial overview at a glance.
            </p>
          </div>

          <div className="dashboard-total-content">
            <TotalCards />
          </div>

          <div className="dashboard-chart-content">
            <h3 className="dashboard-chart-title">Spending Patterns</h3>
            <Chart />
          </div>

          <div className="dashboard-recent-transactions">
            <h3 className="dashboard-transactions-title">
              Recent Transactions
            </h3>
            <TransactionsTable />
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
