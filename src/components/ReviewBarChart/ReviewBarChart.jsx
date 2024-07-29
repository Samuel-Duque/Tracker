import React from "react";
import { Bar } from "react-chartjs-2";
import style from "./ReviewBarChart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ReviewBarChart = ({ reviews }) => {
  let star = (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_389_4348)">
        <path
          d="M11.9828 5.71983L9.83106 7.57657L10.4866 10.3533C10.5228 10.504 10.5135 10.6621 10.4599 10.8076C10.4062 10.953 10.3107 11.0793 10.1854 11.1705C10.06 11.2617 9.91042 11.3136 9.75553 11.3199C9.60064 11.3261 9.44738 11.2862 9.31511 11.2054L6.90035 9.71925L4.48415 11.2054C4.3519 11.2858 4.19883 11.3252 4.0442 11.3188C3.88958 11.3123 3.74032 11.2603 3.61522 11.1692C3.49012 11.0781 3.39477 10.952 3.34118 10.8068C3.28759 10.6616 3.27816 10.5038 3.31407 10.3533L3.97203 7.57657L1.82026 5.71983C1.70325 5.6187 1.61863 5.48534 1.57696 5.33641C1.53529 5.18747 1.53842 5.02956 1.58596 4.88239C1.63351 4.73523 1.72335 4.60533 1.84428 4.50892C1.96521 4.41251 2.11186 4.35386 2.26592 4.3403L5.08712 4.1127L6.17544 1.47893C6.23435 1.33539 6.33461 1.21261 6.46348 1.1262C6.59234 1.03979 6.744 0.993652 6.89915 0.993652C7.05431 0.993652 7.20596 1.03979 7.33483 1.1262C7.4637 1.21261 7.56396 1.33539 7.62287 1.47893L8.7107 4.1127L11.5319 4.3403C11.6863 4.35336 11.8334 4.41168 11.9547 4.50795C12.0761 4.60423 12.1663 4.73418 12.2142 4.88153C12.262 5.02887 12.2653 5.18706 12.2237 5.33626C12.182 5.48547 12.0972 5.61906 11.98 5.72031L11.9828 5.71983Z"
          fill="#2871FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_389_4348">
          <rect
            width="12.2412"
            height="12.2412"
            fill="white"
            transform="translate(0.779785 0.228027)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  const reviewCounts = [1, 2, 3, 4, 5].map(
    (stars) => reviews.filter((review) => review.rating === stars).length
  );

  const data = {
    labels: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
    datasets: [
      {
        data: reviewCounts,
        backgroundColor: "#ffffff",
        hoverBackgroundColor: "#2871ff",
        hoverBorderColor: "#2871ff",
        borderRadius: 4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        borderWidth: 1,
        callbacks: {
          title: function () {
            return "";
          },
          label: function (context) {
            let label = "";
            if (context.parsed.y !== null) {
              const starRating = context.dataIndex + 1;
              return `${context.parsed.y} reviews ${"★".repeat(starRating)}`;
            }
            return "";
          },
        },
        displayColors: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className={style.chart} style={{ width: "191px", height: "81px" }}>
      <Bar data={data} options={options} />
      <div className={style.legend}>
        <div className={style.minorLegend}>1 {star}</div>
        <div className={style.minorLegend}>5 {star}</div>
      </div>
    </div>
  );
};

export default ReviewBarChart;
