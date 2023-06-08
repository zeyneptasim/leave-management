import React from 'react';
import 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import 'chartjs-adapter-moment';
import 'chartjs-adapter-date-fns';
import 'chartjs-adapter-luxon';
import { registerables } from 'chart.js';
import { useTranslation } from 'react-i18next'

// Register necessary elements
Chart.register(...registerables);


const LeaveChart = () => {
  // Dummy data for demonstration purposes
  const { t } = useTranslation()
  const leaveData = {
    labels: ['Продажби', 'Маркетинг', 'Мениджмънт', 'Финаси', 'ИТ'],
    datasets: [
      {
        label: 'Department Leave',
        data: [3, 5, 2, 4, 1], // Number of people on leave per department
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };

  return (
    <div>
      <h2> {t('usersPage.chartTitle')}</h2>
      <Pie data={leaveData} className='chart'/>
    </div>
  );
};

export default LeaveChart;
