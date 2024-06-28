import styles from "./KYCReportContainer.module.css";
import {EKYCReportRisk, EKYCReportStatus, EKYCReportType, IKYCReport} from "../../models/KYCReport.ts";
import KYCReportListItem from "./KYCReportListItem/KYCReportListItem.tsx";
import {PieChart} from "@mui/x-charts";


const ARR_REPORTS: IKYCReport[] = [
  {
    id: 0,
    name: "Amanda Green",
    email: "nicholsfrank@yahoo.com",
    dateCreated: "2023-03-10T05:48:46Z",
    riskScore: null,
    status: EKYCReportStatus.APPROVED,
    type: EKYCReportType.T1,
  },
  {
    id: 1,
    name: "Darlene Jackson",
    email: "katherinealvarado@gmail.com",
    dateCreated: "2024-03-19T22:57:24Z",
    riskScore: EKYCReportRisk.LOW,
    status: EKYCReportStatus.CANCELLED,
    type: EKYCReportType.T2,
  },
  {
    id: 2,
    name: "Tiffany Wiley",
    email: "emily47@yahoo.com",
    dateCreated: "2022-11-18T16:51:51Z",
    riskScore: EKYCReportRisk.LOW,
    status: EKYCReportStatus.IN_PROGRESS,
    type: EKYCReportType.T3,
  },
  {
    id: 3,
    name: "Jacob Rose",
    email: "paul61@oliver.com",
    dateCreated: "2024-05-09T03:35:53Z",
    riskScore: EKYCReportRisk.MEDIUM,
    status: EKYCReportStatus.READY_FOR_REVIEW,
    type: EKYCReportType.T1,
  },
  {
    id: 4,
    name: "Robert Kirk",
    email: "josedavis@yahoo.com",
    dateCreated: "2022-05-15T01:42:48Z",
    riskScore: EKYCReportRisk.LOW,
    status: EKYCReportStatus.REJECTED ,
    type: EKYCReportType.T1,
  },
  {
    id: 5,
    name: "Francisco Lee",
    email: "xbryant@yahoo.com",
    dateCreated: "2021-06-11T21:55:29Z",
    riskScore: EKYCReportRisk.HIGH,
    status: EKYCReportStatus.APPROVED,
    type: EKYCReportType.T3,
  },
  {
    id: 6,
    name: "Olivia Taylor",
    email: "ubuckley@lopez.com",
    dateCreated: "2021-11-04T01:00:17Z",
    riskScore: EKYCReportRisk.MEDIUM,
    status: EKYCReportStatus.APPROVED,
    type: EKYCReportType.T1,
  },
  {
    id: 7,
    name: "Jamie Sanford",
    email: "carollewis@yahoo.com",
    dateCreated: "2024-04-20T09:45:54Z",
    riskScore: null,
    status: EKYCReportStatus.READY_FOR_REVIEW,
    type: EKYCReportType.T2,
  },
  {
    id: 8,
    name: "Patrick Jones",
    email: "ifernandez@lewis.com",
    dateCreated: "2020-01-09T15:03:31Z",
    riskScore: EKYCReportRisk.HIGH,
    status: EKYCReportStatus.APPROVED,
    type: EKYCReportType.T2,
  },
  {
    id: 9,
    name: "Michelle Johnston",
    email: "nallen@snyder.com",
    dateCreated: "2022-09-16T20:27:03Z",
    riskScore: EKYCReportRisk.MEDIUM,
    status: EKYCReportStatus.IN_PROGRESS,
    type: EKYCReportType.T1,
  }
];

const ARR_TABLE_HEADER_COLS = [
  "Created",
  "Name",
  "Type",
  "Risk Score",
  "Status",
  ""
];


export default function KYCReportContainer() {
  const pieData = Object.values(EKYCReportStatus).map((status, index) => {
    const filteredReports = ARR_REPORTS.filter(report => report.status === status)
    return {
      id: index,
      value: filteredReports.length,
      label: status
    }
  })

  return (
    <div className={styles.kycReportContainer}>
      <p className={styles.title}>
        KYC Application Reports
      </p>

      <PieChart
        series={[{data: pieData}]}
        width={600}
        height={200}
      />

      <table>
        <thead>
          <tr>
            {
              ARR_TABLE_HEADER_COLS.map(col => (
                <th>{ col }</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            ARR_REPORTS.map(report => (
              <KYCReportListItem report={report} />)
            )
          }
        </tbody>
      </table>
    </div>
  )
}